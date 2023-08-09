import { connectDB } from '@db/connection'
import { Province, ProvinceModel } from '@api/provinces/models/province.model'
import { Canton, CantonModel } from '@api/provinces/models/canton.model'

export class ProvinceService {
  _db = connectDB()

  async list(): Promise<Province[] | undefined> {
    try {
      const provinces = await ProvinceModel.find<Province>({}).sort({ name: 1 })
      return provinces
    } catch (error) {
      console.log(error)
    }
  }

  async listCantons(): Promise<Canton[] | undefined> {
    try {
      const cantons = await CantonModel.find<Canton>({}).sort({ name: 1 })
      return cantons
    } catch (error) {
      console.log(error)
    }
  }

  async listCantonsByProvince(id: string): Promise<Canton[] | undefined> {
    try {
      const province = parseInt(id)
      const cantons = await CantonModel.find<Canton>({ provinceId: province }).sort({ name: 1 })
      return cantons
    } catch (error) {
      console.log(error)
    }
  }
}
