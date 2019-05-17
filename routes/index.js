const express = require('express')
const router = express.Router()

router
  .get('/', (req, res) => {
    res.send('这是测试路由...')
  })

module.exports = router