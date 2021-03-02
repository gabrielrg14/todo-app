const mongoose = require('mongoose')

mongoose.Promise = global.Promise // Promise do mongoose vai utilizar a API de Promise do node por estar depreciada

module.exports = mongoose.connect('mongodb://localhost/todo', {
    // remover warnings do terminal
    useNewUrlParser: true,
    useUnifiedTopology: true
})