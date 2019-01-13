const log = require('./lib/log')

log.setName('Name 1')

setTimeout(() => {
  log.setName('Name 2')
}, 1000)

setTimeout(() => {
  log.setName('Name 3')
}, 2000)

setTimeout(() => {
  log.setName('Name 4')
}, 3000)

setTimeout(() => {
  log.setName('Rubens Mesquita')
}, 4000)


console.log(log.getName())
let time = setInterval(() => {
  console.log(log.getName())
  if (log.getName() === 'Rubens Mesquita') {
    console.log('Fim...')
    clearInterval(time)
  }
}, 1000)