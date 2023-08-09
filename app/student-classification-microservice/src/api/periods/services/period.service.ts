import { connectDB } from '@db/connection'
import { Period, PeriodModel } from '@api/periods/models/period.model'

export class PeriodService {
  _db = connectDB()

  async list(): Promise<Period[] | undefined> {
    try {
      const periods = await PeriodModel.find<Period>({}).sort({ id: -1 })
      return periods
    } catch (error) {
      console.log(error)
    }
  }
}
