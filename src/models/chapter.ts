import mongoose from 'mongoose'

interface IChapter {}

const chapterSchema = new mongoose.Schema({
  video: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  videoTranscript: {
    type: String
  }
})

const Chapter = mongoose.model('Chapter', chapterSchema)

export { IChapter, Chapter }
