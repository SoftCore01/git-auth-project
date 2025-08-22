import express from 'express'
import { PORT } from './utils/configs.js'
import db from './connect.js'

const app = express()

app.listen(PORT, () => console.log(`The application is running on port:${PORT}`))