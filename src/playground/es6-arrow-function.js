// Challenge arrow functions

const fullName = 'Mike Jones'

const getFirstName = (fullName) => {
  return fullName.split(' ')[0]
}

console.log(getFirstName(fullName))

const getLastName = (fullName) => fullName.split(' ')[1] 

console.log(getLastName(fullName))

