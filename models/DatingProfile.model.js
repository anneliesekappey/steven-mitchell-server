import { Schema, model } from 'mongoose'

const datingProfileSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    emotionalAge: {
      type: Number,
      required: [true, 'Emotional age is required'],
    },
    claimToFame: {
      type: String,
    },
    attractedTo: {
      type: String,
    },
    bestPartAboutMe: {
      type: String,
    },
    worstPartAboutMe: {
      type: String,
    },
  },
  { timestamps: true }
)

const DatingProfile = model('DatingProfile', datingProfileSchema)

export default DatingProfile
