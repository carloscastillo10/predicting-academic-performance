import { Student } from '@api/students/models/student.model'
import { Schema } from 'mongoose'

export const studentSchema = new Schema<Student>(
  {
    identification: String,
    name: String,
    lastname: String,
    age: Number,
    sex: Number,
    province: Number,
    canton: Number,
    disability: Boolean,
    disabilityPercentage: Number,
    disabilitiesNumber: Number,
    subject: String,
    academicPeriod: Number,
    numberFailures: Number,
    aab1: Number,
    aab1Weighted: Number,
    acdb1: Number,
    acdb1Weighted: Number,
    apeb1: Number,
    apeb1Weighted: Number,
    aab2: Number,
    aab2Weighted: Number,
    acdb2: Number,
    acdb2Weighted: Number,
    apeb2: Number,
    apeb2Weighted: Number,
    statusPredicted: String,
    rules: [
      {
        name: String,
        output: Boolean,
        value: String,
      },
    ],
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  },
  { toJSON: { versionKey: false } },
)
