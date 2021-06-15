import { Db, MongoClient } from 'mongodb'

interface DatabaseConnection {
  db: Db
  client: MongoClient
}

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export default async (): Promise<DatabaseConnection> => {
  !client.isConnected() && (await client.connect())

  const db = client.db('teach-other')
  return { db, client }
}
