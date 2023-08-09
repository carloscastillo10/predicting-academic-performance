import { NextFunction, Request, Response, Router } from 'express'
import { SexService } from '@api/sexs/services/sex.service'

const router: Router = Router()
const service: SexService = new SexService()

const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sexs = await service.list()
    res.json({
      message: 'Success',
      statusCode: 200,
      data: sexs,
    })
  } catch (error) {
    next(error)
  }
}

router.get('/', list)

export default router
