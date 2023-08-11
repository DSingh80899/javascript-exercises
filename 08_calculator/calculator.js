const add = function(a,b) {
  return a+b
};

const subtract = function(a,b) {

  return a-b
	
};

const sum = function(array) {
	
  return array.reduce((total,number) => total+number,0)
  
};

const multiply = function(array) {

  return array.reduce((total,number) => total*number,1)

};

const power = function(base,power) {
  let result=1

  for(let i=0;i<power;i++){
    result= result*base
  }
	return result
};

const factorial = function(number) {

  let result=1
  for(let i=1;i<=number;i++){
    result= result*i
  }
  return result

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
