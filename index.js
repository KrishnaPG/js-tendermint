module.exports = require('./src/lightNode.js')
module.exports.LightNode = require('./src/lightNode.js')
module.exports.RpcClient = require('./src/rpc.js')
module.exports.RpcClient.METHODS = require('./src/methods.js')
Object.assign(module.exports, require('./src/verify.js'))
