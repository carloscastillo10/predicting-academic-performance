import { NextFunction, Request, Response, Router } from 'express'
import { SubjectService } from '@api/subjects/services/subject.service'

const router: Router = Router()
const service: SubjectService = new SubjectService()

const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const subjects = await service.list()
    res.json({
      message: 'Success',
      statusCode: 200,
      data: subjects,
    })
  } catch (error) {
    next(error)
  }
}

router.get('/', list)

export default router
