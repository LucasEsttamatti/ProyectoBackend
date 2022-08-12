const express = require('express')
const controller = require('../controllers/controller')

const router = (UserInfo) => {
  const routes = express.Router()

  const { logIn, register } = controller(UserInfo)

  routes.route('/auth/login').post(logIn)

  routes.route('/auth/register').post(register)

  return routes
}

module.exports = router