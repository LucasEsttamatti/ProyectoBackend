const express = require('express')
const cors = require('cors')
const userInfoModel = require('./src/models/userInfoModel')
const routes = require('../src/routes/routes')(UserInfo)
const errorHandler = require('./src/middleware/errorHandler')
const httpStatus = require('./src/helpers/httpStatus')
require('dotenv').config()
const { expressjwt } = require('express-jwt')

const PORT = process.env.PORT || 5000

const app = express()

require('./src/database/db')

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.all(
  '/*',
  expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }).unless({
    path: ['/auth/login', '/auth/register']
  })
)

app.use((err, _, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(httpStatus.UNAUTHORIZED).json({
      error: err.name,
      cause: 'Unauthorized. Missing or invalid token provided.'
    })
  } else {
    next(err)
  }
})

app.use('/api', routes)
// app.use('/', authRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log('Server is running!')
})
