const { josa } = require('./josa.config.json')

module.exports = function (fn) {
  console.log('/***/')
  const result = fn(josa)
  console.log(typeof result === 'string' ? result : result.join('\n'))
}
