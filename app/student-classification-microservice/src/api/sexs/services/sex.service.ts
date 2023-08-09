import { connectDB } from '@db/connection'
import { Sex, SexModel } from '@api/sexs/models/sex.model'

export class SexService {
  _db = connectDB()

  async list(): Promise<Sex[] | undefined> {
    try {
      const sexs = await SexModel.find<Sex>({})
      return sexs
    } catch (error) {
      console.log(error)
    }
  }
}
