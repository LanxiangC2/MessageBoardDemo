//User Model

const mongoose  = require('../db/db')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: String,
    age: Number,
    city: String,
    gender: {
        type: Number,
        default:0 // 0保密 1男 2女
    }
}, {
    timestamps: true // 时间戳
})

const User = mongoose.model('user', UserSchema)//第一参数对应到数据库的collection

module.exports = User