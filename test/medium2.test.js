const expect = require ("chai").expect;
const math = require('../index.js')

describe('math.js tests', () => {
    describe('math.add() Test', () => {
        it('should equal 3', async() => {
            const result = await math.add(2, 1);
            expect(result).to.equal(4);
        });
        it('should equal 5', () => {
            const result = math.add(3, 2);
            expect(result).to.equal(5);
        });
    });
})