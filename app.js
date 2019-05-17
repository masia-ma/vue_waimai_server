const express = require('express')
const path = require('path')
const session = require('express-session')
const routerIndex = require('./routes/index')
const routerUsers = require('./routes/users')

var app = express()

app
  .use('/public', express.static(path.join(__dirname, './public')))
  .use('./node_modules', express.static(path.join(__dirname, './node_modules')))
  .use(express.json())
  .use(session({ 
    secret: 'keyboard cat', // 密钥
    resave: false,
    saveUninitialized: true 
  }))
  .use('/api', routerIndex)
  .use('/users', routerUsers)
  

app.listen('4000', function () {
  console.log('Server is running at port 4000.')
})