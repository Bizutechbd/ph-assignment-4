/* Problem-1: Let's play a mind game.
1. This function performs a calculation on a given number and returns the result.
2. A number to perform the calculation.
3. Returns the calculated end result if num is positive. Returns undefined if num is now not defined or negative.
*/

function mindGame(number) {
    if (!number || number < 0);
  
    const result = (number * 3 + 10) / 2 - 5;
  
    return result;
  }

console.log(mindGame(5));



/* Problem-2: Finding even or odd.
1. This function checks if the length of a given string is even or odd.
2. 'str' - A string to check the length of.
3. if the length of the string is even, 'odd' if the length is odd.
4. 'Undefined' if str is not defined.
*/

function evenOdd(str) {
    if (!str || typeof str !== 'string') return;
  
    return str.length % 2 == 0 ? 'even' : 'odd';
  }

console.log(evenOdd('Bizu'));



/* Problem-3: Is Less or Greater than seven.
1. This function performs a calculation on a given number and returns the result.
2. If the number is less than 7, the function returns the difference between the number and 7.
3. If the number is greater than 7, the function returns the result of the number multiplied by 2.
4. 'num' A number to perform the calculation on.
5. 'number' The difference between 'num' and 7 if 'num' is less than 7.
6.  'number' The result of 'num' multiplied by 2 if 'num' is greater than  7.
7. 'undefined' if 'num' is not defined or not a number.
*/

function isLGSeven(num) {
    if (!num || typeof num !== 'number') return;
  
    const x = 7;
  
    if (num < x) {
      return num - x;
    }
  
    return num * 2;
  }



/* Problem-4: Finding Bad data
1. Checks negative numbers in an array and returns the count of negative numbers.
2. 'nums' - An array of numbers to check.
3. 'number' The number of negative numbers in the input array.
 */

function findingBadData(numbers) {
    if (!numbers || !Array.isArray(numbers)) return 0;
  
    const isNegative = (number) => {
      return number < 0;
    };
  
    const badData = numbers.filter(isNegative);
  
    return badData.length;
  }



/* Problem-5: Convert your gems into diamond.
1. Calculates the complete variety of diamonds primarily based on the variety of gems.
2. x - Number of gem X.
3. y - Number of gem Y.
4. z - Number of gem Z.
5. The total number of diamonds. if the input is invalid, returns 0.
*/

function gemsToDiamond(x, y, z) {
    if (
      !x ||
      typeof x !== 'number' ||
      !y ||
      typeof y !== 'number' ||
      !z ||
      typeof z !== 'number'
    ) {
      return 0;
    }
  
    const gemsPower = {
      x: 21,
      y: 32,
      z: 43,
    };
  
    const maxThreshold = 2000;
  
    const totalDiamonds = x * gemsPower.x + y * gemsPower.y + z * gemsPower.z;
  
    if (totalDiamonds > maxThreshold) {
      return totalDiamonds - maxThreshold;
    }
  
    return totalDiamonds;
  }





