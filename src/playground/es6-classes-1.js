class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hi, I am ${this.name}!`
  }
  getDesc() {
    return `${this.name} is ${this.age} year(s) old!`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDesc() {
    let desc = super.getDesc()
    if (this.hasMajor()) {
      desc += ` Their major is ${this.major}!`
    }
    return desc
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting()
    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}!`
    }
    return greeting
  }
}


// Traveller extends Person
// Add support for homeLocation
// override getGreeting
// 1. include homeLocation if it exists
// msg => Hi, i am <some name>. i'm visiting from <some location>

const me = new Traveller('Mike Jones', 34, 'Atlantis')
console.log(me.getGreeting())

const you = new Traveller(undefined, undefined, 'Nowhere')
console.log(you.getGreeting())