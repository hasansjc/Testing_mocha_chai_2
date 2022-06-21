
const expect = require ("chai").expect;
const math = require('../index.js')

describe('math.js tests', () => {
    describe('math.add() Test', () => {
        it('should equal 2', async() => {
            const result =  await math.add(2, 2);
            expect(result).to.equal(4);
        });
      
    });
    
    describe('math.multiply() Test', () => {
        it('should equal 3', async() => {
            const result = await math.multiply(3, 3);
            expect(result).to.equal(3);
        });
        it('should equal 10', async() => {
            const result = await math.multiply(5, 2);
            expect(result).to.equal(10);
        });
    });
});