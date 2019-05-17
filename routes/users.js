const express = require('express')
const router = express.Router()
const md5 = require('blueimp-md5')
const { User } = require('../models/users')
const MD5SECRET = 'masia66666'

router 
  .post('/register', async (req, res) => {
    req.body.password = md5(md5(req.body.password + MD5SECRET))
    const user = await User.create(req.body)
    req.session.user = user
    res.send({
      msg: 'session 注入成功'
    })
  })
  .post('/login', async (req, res) => {
    req.body.password = md5(md5(req.body.password + MD5SECRET))
    const user = await User.findOne().where({
      email: req.body.email
    })
    if (!user) { // 如果对象为空
      return res.send({
        msg: '输入的用户名不存在'
      })
    } else { // 如果对象存在
      if (user.password != req.body.password) { 
        return res.send({
          msg: '输入的密码错误'
        })
      } else {
        req.session.user = user
        res.send({
          msg: 'session 注入成功'
        })
      }
    }
  })
  .get('/profile', (req, res) => {
    res.send(req.session)
  })
  .get('/test', (req, res) => {
    res.send('ok')
  })
  

module.exports = router