const uuid = require('uuid-random')
const getData = require('../lib/get-data')

module.exports = async function (context) {
  const data = await getData(context)

  if (data.length > 0) {
    context.log(`Got data - ${data.length}`)
    context.bindings.mySbQueue = data
      .map(item => Object.assign({}, { eventSourceId: uuid() }, item))
  } else {
    context.log(`Nothing to index`)
  }
  context.log(`finished`)
}
