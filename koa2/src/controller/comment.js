//留言
const Comment = require('../model/Comment')

//更新留言

async function update(_id, username, content ) {
    await Comment.findOneAndUpdate({
        _id: _id,
        username: username
    },{
        content:content
    },{
        new: true
    })
}

// 删除留言
async function del( _id, username) {
    await Comment.deleteOne({
        _id,
        username //只能删除自己的
    })
}

//获取留言列表
async function getList(username = '') {
    const whereOpt = {}
    if (username) {
        whereOpt.username = username
    }
    const list= Comment.find(whereOpt).sort({_id: -1})

    return list
}


//创建留言
async function create(content, username) {
    const newComment = await Comment.create({
        content, username
    })
    return newComment
}

module.exports = {
    create,
    getList,
    del,
    update
}