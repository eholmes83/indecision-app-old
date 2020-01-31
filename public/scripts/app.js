'use strict';

// Challenge arrow functions

var fullName = 'Mike Jones';

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName(fullName));

var getLastName = function getLastName(fullName) {
  return fullName.split(' ')[1];
};

console.log(getLastName(fullName));
