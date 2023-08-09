import { sexSchema } from '@db/schemas/sex.schema'
import { BaseModel } from '@utils/base.model'
import { model } from 'mongoose'

export interface Sex extends BaseModel {
  name: string
}

export const SexModel = model<Sex>('sexs', sexSchema)
