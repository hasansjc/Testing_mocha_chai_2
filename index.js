const math = {};

// math.add = (num1, num2) => num1 + num2;
math.add = async (num1, num2) =>  num1 + num2;
// math.multiply = (num1, num2) => num1 * num2;
math.multiply = (num1, num2) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(num1 * num2);
    }, 1000);
    
});

module.exports = math;



