const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/vue_waimai', {
  useCreateIndex: true,
  useNewUrlParser: true
})

// 创建一个用户模型
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  nickname: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  create_time: {
    type: Date,
    default: Date.now
  },
  last_modified_time: {
    type: String,
    default: Date.now
  },
  avator: {
    type: String,
    default: '/public/img/avator.jpg',
  },
  bio: {
    type: String,
    default: ''
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1], // -1保密， 0男， 1女
    default: -1
  },
  birthday: {
    type: String,
    default: ''
  },
  phone: {
    type: Number,
    default: ''
  },
  status: { // 权限状态
    type: Number,
    // 0 没有权限限制
    // 1 不可以评论
    // 2 不可以登录
    // 是否可以评论
    //是否可以登录使用
    enum: [0, 1, 2], 
    default: 0
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = {
  User
}