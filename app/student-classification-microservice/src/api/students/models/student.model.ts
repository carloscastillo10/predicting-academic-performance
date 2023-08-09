import { studentSchema } from '@db/schemas/student.schema'
import { BaseModel } from '@utils/base.model'
import { model } from 'mongoose'
import { Province } from '@api/provinces/models/province.model'
import { Canton } from '@api/provinces/models/canton.model'
import { Sex } from '@api/sexs/models/sex.model'
import { Subject } from '@api/subjects/models/subject.model'
import { Period } from '@api/periods/models/period.model'

export interface Student extends BaseModel {
  identification: string
  name: string
  lastname: string
  age: number
  sex: Sex
  province: Province
  canton: Canton
  disability: boolean
  disabilityPercentage: number
  disabilitiesNumber: number
  subject: Subject
  academicPeriod: Period
  numberFailures: number
  aab1: number
  aab1Weighted: number
  acdb1: number
  acdb1Weighted: number
  apeb1: number
  apeb1Weighted: number
  aab2: number
  aab2Weighted: number
  acdb2: number
  acdb2Weighted: number
  apeb2: number
  apeb2Weighted: number
  statusPredicted?: string
  rules?: {
    name: string
    output: boolean
    value: string
  }[]
}

export const StudentModel = model<Student>('students', studentSchema)
