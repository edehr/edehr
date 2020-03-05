import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  createDate: {type: Date, default: Date.now},
  feedbackData: { type: String, required: [true, 'Require feedback'] },
})

const Feedback = mongoose.model('Feedback', Schema)

export default Feedback
