'use strict'

/*
case tambah
inputan 1 + inputan 2
*/

class Calculator {
  //write your code here
  constructor(a, b, nilai = 0) {
    this.a = a
    this.b = b
    this.nilai = nilai
  }
  add(a = 0, b = 0, nilai) {
    this.a = a
    this.b = b
    console.log(this.nilai += a + b);
    return this
  }
  subtract(a = 0, b = 0, nilai) {
    this.a = a
    this.b = b
    console.log(this.nilai -= a - b)
    return this
  }
  multiply(a = 1, b = 1, nilai) {
    this.a = a
    this.b = b
    console.log(this.nilai *= a * b)
    return this
  }
  divide(a = 1, b = 1, nilai) {
    this.a = a
    this.b = b
    console.log(this.nilai /= a / b)
    return this
  }
  square(a = this.nilai, b, nilai) {
    // console.log('ini a', a);
    // console.log('ini a', b);
    this.a = a
    if (b == undefined) {
      console.log(this.nilai = Math.pow(this.nilai, a))
      return this
    } else if (b !== undefined) {
      console.log(this.nilai = Math.pow(a, b))
      return this
    }
  }
  squareRoot(a, nilai) {
    this.a = a
    console.log(this.nilai = Math.sqrt(a))
    return this
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
