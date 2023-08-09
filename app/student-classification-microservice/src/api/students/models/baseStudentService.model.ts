import { ClassifyStudentDto } from '@api/students/dtos/classifyStudent.dto'
import { Document, FlattenMaps, Types } from 'mongoose'
import { Student } from '@api/students/models/student.model'

export interface BaseStudentService {
  _db: Promise<void>

  create(data: ClassifyStudentDto): void

  populate(
    student: Document<unknown, {}, Student> &
      Student & {
        _id: Types.ObjectId
      },
  ): Promise<
    FlattenMaps<
      Student & {
        _id: Types.ObjectId
      }
    >
  >

  list(): Student[] | Promise<Student[] | undefined>
}
