import { Canton } from '@api/provinces/models/canton.model'
import { Schema } from 'mongoose'

export const cantonSchema = new Schema<Canton>({
  name: String,
  provinceId: Number,
})
