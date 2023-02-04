import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/queenveeDB'

const connectDB = async () => {
  try {
    const x = await mongoose.connect(DB_URI)
    console.log(`Connected to Mongo! Database: ${x.connections[0].name}`)
  } catch (error) {
    console.error(error)
  }
}

connectDB()
