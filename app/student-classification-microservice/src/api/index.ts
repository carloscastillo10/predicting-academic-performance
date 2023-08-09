import { config } from '@config/config'
import express, { Express, Router } from 'express'
import studentRouter from '@api/students/routes/student.router'
import sexRouter from '@api/sexs/routes/sex.router'
import provinceRouter from '@api/provinces/routes/province.router'
import subjectRouter from '@api/subjects/routes/subject.router'
import periodRouter from '@api/periods/routes/period.router'
import bodyParser from 'body-parser'
import cors from 'cors'

const app: Express = express()
const router: Router = Router()

app.use(express.json())
app.use(
  cors({
    origin: config.whiteList,
  }),
)
app.use(bodyParser.json())
app.use('/api/v1', router)
router.use('/students', studentRouter)
router.use('/sexs', sexRouter)
router.use('/provinces', provinceRouter)
router.use('/subjects', subjectRouter)
router.use('/periods', periodRouter)

app.listen(config.port, () => {
  console.log(`⛈ [Server]: Server is runnin at http://localhost:${config.port}`)
})

export default app
