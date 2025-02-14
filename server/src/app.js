import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { sequelize } from './models.js'
import { plantRouter } from './routes/plants.js'

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/plants', plantRouter)

sequelize.sync({ force: false }).then(() => {
    app.listen(3000)
})
