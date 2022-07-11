// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
    let result = 0;
    for (let item = 0; item < arrayOfNumbers.length; item++) {
        result += arrayOfNumbers[item]
    }
    return result;
}
// assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
    // Initializing an empty array to hold the even numbers
    let result = [];
    // Iterating over each item of (arrayOfNumbers)
    for (let item = 0; item < arrayOfNumbers.length; item++) {
        // Applying the modulus operator to get even numbers of (arrayOfNumbers)
        if (arrayOfNumbers[item] % 2 === 0) {
            // Updating the empty (result) array with even numbers
            result.push(arrayOfNumbers[item]);
        }
    }
    // Returning the count of all even numbers in the (result) array
    return result.length
}
assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
     // Initializing an empty array to hold the fahrenheit values
    let arrayToFarenheit = [];
    // Iterating over each number of (arrayOfNumbers)
    for (num of arrayOfNumbers) {
        if (num) {
            // Formular for converting each number to fahrenheit
            const numToFahrenheit = num * 1.8 + 32
            // Removing decimal figures in the converted numbers
            let toWholeNumber = Math.trunc(numToFahrenheit)
            // Inserting the converted celsius values into the empty (arrayToFarenheit) array
            arrayToFarenheit.push(Math.trunc(toWholeNumber))
        }
    }
    // Returning the updated (arrayToFarenheit) array with temperature values in farenheit instead
    return arrayToFarenheit;
}
assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

