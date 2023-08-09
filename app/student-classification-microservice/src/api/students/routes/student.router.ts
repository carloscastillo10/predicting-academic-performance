import { Router, Request, Response, NextFunction } from 'express'
import { StudentService } from '@api/students/services/student.service'

const router: Router = Router()
const service: StudentService = new StudentService()

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studentData = await service.create(req.body)
    res.status(201).json({
      message: 'Created',
      statusCode: 201,
      data: studentData,
    })
  } catch (error) {
    next(error)
  }
}

const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const students = await service.list()
    res.json({
      message: 'Success',
      statusCode: 200,
      data: students,
    })
  } catch (error) {
    next(error)
  }
}

router.post('/', create)
router.get('/', list)

export default router
