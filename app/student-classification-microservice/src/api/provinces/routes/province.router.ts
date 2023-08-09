import { NextFunction, Request, Response, Router } from 'express'
import { ProvinceService } from '@api/provinces/services/province.service'

const router: Router = Router()
const service: ProvinceService = new ProvinceService()

const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const provinces = await service.list()
    res.json({
      message: 'Success',
      statusCode: 200,
      data: provinces,
    })
  } catch (error) {
    next(error)
  }
}

const listCantons = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cantons = await service.listCantons()
    res.json({
      message: 'Success',
      statusCode: 200,
      data: cantons,
    })
  } catch (error) {
    next(error)
  }
}

const listCantonsByProvince = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const cantons = await service.listCantonsByProvince(id)
    res.json({
      message: 'Success',
      statusCode: 200,
      data: cantons,
    })
  } catch (error) {
    next(error)
  }
}

router.get('/', list)
router.get('/cantons', listCantons)
router.get('/:id/cantons', listCantonsByProvince)

export default router
