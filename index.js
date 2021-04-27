// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:


function checkAge(age) {
    let result=age >18;
    return result;
  }
  console.log(checkAge(14))


// Write a function min(a,b) which returns the least of two numbers a and b.
  function min(a, b) {
    if (a<b) {
      return a
    } else {
      return b
    }
   
  }
  console.log("Task2:",min(55,50))

// Write a function pow(x,n) that returns x in power n.
//  Or, in other words, multiplies x by itself n times and returns the result.
  function pow(x, n) {  
      return x**n   
  }
  console.log("Task5:",pow(3,3));