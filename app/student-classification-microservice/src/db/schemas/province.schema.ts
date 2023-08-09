import { Province } from '@api/provinces/models/province.model'
import { Schema } from 'mongoose'

export const provinceSchema = new Schema<Province>({
  name: String,
})
