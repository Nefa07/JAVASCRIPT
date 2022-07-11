'use strict'

/*
case tambah
inputan 1 + inputan 2
*/

class Calculator {
  //write your code here
  constructor(nilai = 0) {
    this.nilai = nilai
    console.log(`Nilai Awal: ${nilai}`);
  }

  add(val = 0) {
    console.log(`${this.nilai} + ${val} =`);
    this.nilai += val;
    console.log(this.nilai)
    return this
  }

  subtract(val = 0) {
    console.log(`${this.nilai} - ${val} =`);
    this.nilai -= val;
    console.log(this.nilai)
    return this
  }

  multiply(val = 1) {
    console.log(`${this.nilai} * ${val} =`);
    this.nilai *= val
    console.log(this.nilai)
    return this
  }

  divide(val = 1) {
    console.log(`${this.nilai} / ${val} =`);
    this.nilai /= val
    console.log(this.nilai)
    return this
  }

  square(val = 1) {
    console.log(`${this.nilai} pangkat ${val} =`);
    this.nilai = Math.pow(this.nilai, val)
    console.log(this.nilai)
    return this
  }

  squareRoot() {
    console.log(`akar ${this.nilai} =`);
    this.nilai = Math.sqrt(this.nilai)
    console.log(this.nilai)
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
