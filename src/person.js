console.log('running from person.js')

const isAdult = (age) => age >= 18 ? true : false

const canDrink = (age) => age >= 21 ? true : false

const isSenior = (age) => age >= 65 ? true : false

// export default (age) => age >= 65 ? true : false

export {
  isAdult,
  canDrink,
  isSenior as default
}