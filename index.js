const log = require('./lib/log')
const arrayUsers = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Rubens Mesquita']
const allPromise = arrayUsers.map((user) => {
  return new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
      log.setName(user)
      console.log(user)
      clearTimeout(wait)
      resolve()
    }, 1000)
  })
})
Promise.all(allPromise).then(() => {
  console.log('Fim...')
})