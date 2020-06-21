//Comment Model

const mongoose  = require('../db/db')

const CommentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true //必须
    },
    username: String
}, {
    timestamps: true // 时间戳
})

const Comment = mongoose.model('comment', CommentSchema)//第一参数对应到数据库的collection

module.exports =  Comment 