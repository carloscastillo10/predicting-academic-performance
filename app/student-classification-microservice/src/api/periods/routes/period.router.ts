import { NextFunction, Request, Response, Router } from 'express'
import { PeriodService } from '@api/periods/services/period.service'

const router: Router = Router()
const service: PeriodService = new PeriodService()

const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const periods = await service.list()
    res.json({
      message: 'Success',
      statusCode: 200,
      data: periods,
    })
  } catch (error) {
    next(error)
  }
}

router.get('/', list)

export default router
