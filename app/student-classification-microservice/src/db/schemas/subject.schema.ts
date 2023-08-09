import { Subject } from '@api/subjects/models/subject.model'
import { Schema } from 'mongoose'

export const subjectSchema = new Schema<Subject>({
  name: String,
})
