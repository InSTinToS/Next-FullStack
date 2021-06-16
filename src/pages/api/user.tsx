import databaseConnection from 'utils/databaseConnection'

import { NextApiRequest, NextApiResponse } from 'next'

interface ErrorResponse {
  error: string
}

interface SuccessResponse {
  _id: string
  name: string
  email: string
  courses: string[]
  reviews: Object[]
  teacher: boolean
  cellphone: string
  appointments: Object[]
  available_hours: Object
  available_locations: string[]
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | SuccessResponse>
) => {
  if (req.method === 'POST') {
    const {
      name,
      email,
      teacher,
      courses,
      reviews,
      cellphone,
      appointments,
      available_hours,
      available_locations,
    } = req.body

    if (!teacher) {
      if (!name || !email || !cellphone)
        return res.status(400).json({ error: 'Missing body params :(' })
    } else if (teacher) {
      if (
        !name ||
        !email ||
        !courses ||
        !cellphone ||
        !available_hours ||
        !available_locations
      )
        return res.status(400).json({ error: 'Missing body params :(' })
    }

    const { db } = await databaseConnection()

    const response = await db.collection('users').insertOne({
      name,
      email,
      teacher,
      cellphone,
      coins: 1,
      reviews: reviews || [],
      courses: courses || [],
      appointments: appointments || [],
      available_hours: available_hours || {},
      available_locations: available_locations || [],
    })

    res.status(200).json(response.ops[0])
  } else if (req.method === 'GET') {
    const { email } = req.body

    if (!email)
      return res.status(400).json({ error: 'Need "email" on body :(' })

    const { db } = await databaseConnection()
    const response = await db.collection('users').findOne({ email })

    if (!response)
      return res
        .status(400)
        .json({ error: 'Not found user with this e-mail :(' })

    return res.status(200).json(response)
  } else res.status(400).json({ error: 'Wrong request method :(' })
}
