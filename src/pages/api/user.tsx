import databaseConnection from 'utils/databaseConnection'

import { NextApiRequest, NextApiResponse } from 'next'

interface ErrorResponse {
  error: string
}

interface SuccessResponse {
  _id: string
  name: string
  email: string
  teacher: string
  cellphone: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | SuccessResponse>
) => {
  if (req.method === 'POST') {
    const { name, email, cellphone, teacher } = req.body

    if (!name || !email || !cellphone || !teacher)
      return res.status(400).json({ error: 'Missing body params :(' })

    const { db } = await databaseConnection()

    const response = await db.collection('users').insertOne({
      name,
      email,
      teacher,
      cellphone,
    })

    res.status(200).json(response.ops[0])
  } else res.status(400).json({ error: 'Wrong request method :(' })
}
