import { cantonSchema } from '@db/schemas/canton.schema'
import { BaseModel } from '@utils/base.model'
import { model } from 'mongoose'

export interface Canton extends BaseModel {
  name: string
  provinceId: number
}

export const CantonModel = model<Canton>('cantons', cantonSchema)
