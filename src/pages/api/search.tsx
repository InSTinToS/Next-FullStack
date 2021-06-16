import databaseConnection from 'utils/databaseConnection'

import { ObjectID } from 'mongodb'
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
  res: NextApiResponse<ErrorResponse | SuccessResponse[]>
) => {
  if (req.method === 'GET') {
    const { courses } = req.body

    if (!courses)
      return res.status(400).json({ error: 'Missing course name on body :(' })

    const { db } = await databaseConnection()
    const response = await db.collection('users').find({ courses }).toArray()

    if (response.length === 0)
      return res.status(400).json({ error: 'Course not found :(' })

    return res.status(200).json(response)
  } else res.status(400).json({ error: 'Wrong request method :(' })
}
