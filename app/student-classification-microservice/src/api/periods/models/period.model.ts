import { periodSchema } from '@db/schemas/period.schema'
import { BaseModel } from '@utils/base.model'
import { model } from 'mongoose'

export interface Period extends BaseModel {
  name: string
}

export const PeriodModel = model<Period>('periods', periodSchema)
