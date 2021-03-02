const restful = require('node-restful')
const moongoose = restful.mongoose

const todoSchema = new moongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now()  }
})

module.exports = restful.model('Todo', todoSchema)