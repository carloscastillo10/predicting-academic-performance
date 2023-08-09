import { subjectSchema } from '@db/schemas/subject.schema'
import { BaseModel } from '@utils/base.model'
import { model } from 'mongoose'

export interface Subject extends BaseModel {
  name: string
}

export const SubjectModel = model<Subject>('subjects', subjectSchema)
