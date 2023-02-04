import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

import './db/index.js'

import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.post('/datingprofile', async (req, res) => {
  const { body } = req
  try {
    const newDatingProfile = await DatingProfile.create(body)
    res.status(201).json(newDatingProfile)
  } catch (error) {
    res.status(400).json({ status: 400, msg: error.message })
  }
})

app.get('/datingprofile', async (req, res) => {
  try {
    const datingProfiles = await DatingProfile.find()
    res.status(200).json(datingProfiles)
  } catch (error) {
    res.status(500).json({ status: 500, msg: error.message })
  }
})

app.get('/datingprofile/:id', async (req, res) => {
  const { id } = req.params
  try {
    const datingProfile = await DatingProfile.findById(id)
    if (datingProfile) {
      res.status(200).json(datingProfile)
    } else {
      res.status(404).json({ status: 404, msg: 'Dating profile not found' })
    }
  } catch (error) {
    if (error.kind === 'ObjectId') {
      res.status(404).json({ status: 404, msg: error.message })
    } else {
      res.status(500).json({ status: 500, msg: error.message })
    }
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT} port`)
})
