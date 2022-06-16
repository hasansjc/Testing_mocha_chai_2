// const assert = require('assert');

const { expect } = require("chai");

  
// // We can group similar tests inside a describe block
// describe("Simple Calculations", () => {
//   before(() => {
//     console.log( "This part executes once before all tests" );
//   });
  
//   after(() => {
//     console.log( "This part executes once after all tests" );
//   });
      
//   // We can add nested blocks for different tests
//   describe( "Test1", () => {
//     beforeEach(() => {
//       console.log( "executes before every test" );
//     });
      
//     it("Is returning 5 when adding 2 + 3", () => {
//       assert.equal(2 + 3, 5);
//     });
  
//     it("Is returning 6 when multiplying 2 * 3", () => {
//       assert.equal(2*3, 6);
//     });
//   });
  
//   describe("Test2", () => {
//     beforeEach(() => {
//       console.log( "executes before every test" );
//     });
      
//     it("Is returning 4 when adding 2 + 3", () => {
//       assert.equal(2 + 2, 4);
//     });
  
//     it("Is returning 8 when multiplying 2 * 4", () => {
//       assert.equal(2*4, 8);
//     });
//   });
// });

// const expect = require('chai').expect;
  
// describe("Testing with chai", () => {
//     it("Is returning 4 when adding 2 + 2", () => {
//       expect(2 + 2).to.equal(4);
//     });
  
//     it("Is returning boolean value as true", () => {
//       expect(5 == 5).to.be.true;
//     });
      
//     it("Are both the sentences matching", () => {
//       expect("This is working").to.equal('This is working');
//     });
//  });

// var assert = require('chai').assert
//   , foo = 'bar'
//   , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

// assert.typeOf(foo, 'string'); // without optional message
// assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
// assert.equal(foo, 'bar', 'foo equal `bar`');
// assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
// assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');

const assert = require ("chai").expect;
const sayHello = require('../index.js').sayHello;
const Add = require('../index.js').Add;

describe("app",function (){
  it.skip('should say hello',function (){
    expect(sayHello()).to.be.a('string');
  })
  it('should add two numbers',function (){
    expect(Add(5,5)).to.be.equal(10)
  })
  it('should add two numbers',function (){
    expect(Add(5,5)).to.be.a('number')
  })
  

})

// expect(function () { try {
  
// } catch (error) {
//   throw error
// }}).to.not.throw();
// expect({a: 1}).to.not.have.property('b');
// expect([1, 2]).to.be.an('array').that.does.not.include(3);
// expect([{a: 1}]).to.deep.include({a: 1});
// expect({b: {b: ['x', 'y'],b: ['x', 'y'],d: ['r', 's']},a: {b: ['x', 'y','z'],d: ['r', 's']}}).to.have.nested.property('a.b[2]')


describe('random test', function(){
  it("reandon test",function(){
    expect([1, 2, 3]).to.have.ordered.members([ 1,2,3])
    .but.not.have.ordered.members([2, 1]);
  
    expect('nooo why fail??').to.be.a('string', 'nooo why fail??');
  
    expect({a: 1, b: 2, c: 3}).to.include({a: 1, b: 2});
  })
})
function test () {
  expect(arguments).to.be.arguments;
}

test("arg");


