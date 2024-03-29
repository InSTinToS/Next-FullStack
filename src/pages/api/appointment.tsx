import databaseConnection from 'utils/databaseConnection'

import { ObjectID } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

interface ErrorResponse {
  error: string
}

interface SuccessResponse {
  date: string
  course: string
  location: string
  teacher_id: string
  student_id: string
  student_name: string
  teacher_name: string
  appointment_link: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | SuccessResponse>
) => {
  if (req.method === 'POST') {
    const session = await getSession({ req })

    if (!session) res.status(401).json({ error: 'Please login first' })

    const {
      date,
      course,
      location,
      teacher_id,
      student_id,
      student_name,
      teacher_name,
      appointment_link,
    } = req.body

    if (
      !date ||
      !course ||
      !location ||
      !teacher_id ||
      !student_id ||
      !teacher_name ||
      !student_name
    )
      return res.status(400).json({ error: 'Missing param on body :(' })

    const { db } = await databaseConnection()

    const teacherExists = await db
      .collection('users')
      .findOne({ _id: new ObjectID(teacher_id) })

    if (!teacherExists)
      return res.status(400).json({
        error: `Teacher ${teacher_name} not exists id: ${teacher_id} :(`,
      })

    const studentExists = await db
      .collection('users')
      .findOne({ _id: new ObjectID(teacher_id) })

    if (!studentExists)
      return res.status(400).json({
        error: `Teacher ${student_name} not exists id: ${student_id} :(`,
      })

    const appointment = {
      date,
      course,
      location,
      teacher_id,
      student_id,
      student_name,
      teacher_name,
      appointment_link: appointment_link || '',
    }

    await db.collection('users').updateOne(
      {
        _id: new ObjectID(teacher_id),
      },
      {
        $push: {
          appointments: appointment,
        },
      }
    )

    await db.collection('users').updateOne(
      {
        _id: new ObjectID(student_id),
      },
      {
        $push: {
          appointments: appointment,
        },
      }
    )

    return res.status(200).json(appointment)
  } else res.status(400).json({ error: 'Wrong request method :(' })
}
