import { config } from '@config/config'
import { connect } from 'mongoose'

export const connectDB = async () => {
  await connect(config.dbUrl)
}
