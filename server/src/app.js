import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { sequelize } from './models.js'

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

sequelize.sync({ force: false }).then(() => {
    app.listen(3000)
})
