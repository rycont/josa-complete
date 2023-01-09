const { josa } = require('./data.json')

module.exports = function (fn) {
  console.log('/***/')
  const result = fn(josa)
  console.log(typeof result === 'string' ? result : result.join('\n'))
}
