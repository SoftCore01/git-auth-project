import express, { json, urlencoded } from 'express'
import { PORT } from './utils/configs.js'
import routers from './routers/index.js'
const app = express()

app.use(
    urlencoded({ extended: true }),
    json(),
    routers
)

app.listen(PORT, () => console.log(`The application is running on port:${PORT}`))