const crypto = require('crypto')

const md5String = (message) => {
  const md5 = crypto.createHash('md5')
  const result = md5.update(message).digest('hex')
  return result
}

module.exports = {
  md5String
}
