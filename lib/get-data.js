const axios = require('axios')

module.exports = async context => {
  try {
    context.log(`get-data - ${process.env.SOURCE_URL} - start`)
    const { data } = await axios.get(process.env.SOURCE_URL)
    context.log(`get-data - ${process.env.SOURCE_URL} - ${data.length} - success`)
    return data
  } catch (error) {
    context.log.error(`get-data - ${process.env.SOURCE_URL} - ${error}`)
    return []
  }
}
