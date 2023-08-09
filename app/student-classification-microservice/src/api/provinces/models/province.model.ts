import { provinceSchema } from '@db/schemas/province.schema'
import { BaseModel } from '@utils/base.model'
import { model } from 'mongoose'

export interface Province extends BaseModel {
  name: string
}

export const ProvinceModel = model<Province>('provinces', provinceSchema)
