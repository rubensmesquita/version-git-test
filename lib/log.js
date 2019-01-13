var Name = 'João'

const setName = (name) => {
  Name = name
}

const getName = () => {
  return Name
}

module.exports = {
  setName,
  getName
}