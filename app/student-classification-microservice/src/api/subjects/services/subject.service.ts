import { connectDB } from '@db/connection'
import { Subject, SubjectModel } from '@api/subjects/models/subject.model'

export class SubjectService {
  _db = connectDB()

  async list(): Promise<Subject[] | undefined> {
    try {
      const subjects = await SubjectModel.find<Subject>({})
      return subjects
    } catch (error) {
      console.log(error)
    }
  }
}
