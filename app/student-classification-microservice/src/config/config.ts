import dotenv from 'dotenv'
dotenv.config()

export const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  predictModelUrl: process.env.PREDICT_MODEL_URL,
  dbUrl: process.env.DATABASE_URL || '',
  whiteList: JSON.parse(process.env.WHITE_LIST || '[]'),
}
