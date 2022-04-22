// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe('contentShuffler', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    it('takes in an array, removes the first item from the array and shuffles the remaining content.', () => {
      expect(contentShuffler(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
      expect(contentShuffler(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
    })
})

// Successful Failure 
//  FAIL  ./code-challenges.test.js
//   contentShuffler
//   ✕ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)
// ● contentShuffler › takes in an array, removes the first item from the array and shuffles the remaining content.
//   ReferenceError: contentShuffler is not defined


// b) Create the function that makes the test pass.
// Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// Pseudo code 
// create a function 
// input is an array 
// we need to first remove the first item in the array by using .shift()
// then shuffle the remaining - using math.floor and math.random somewhere in our code to randomize the remaining items in the array 
// use a for loop -- since initial approach of a HOF did not work. 


const contentShuffler = (array) => {
    array.shift()
    for (i = 0; i < array.length; i++) {
        let randomizer = Math.floor(Math.random() * array.length)
        let newArray = array [i]
        array[i] = array[randomizer]
        array[randomizer] = newArray 
    }
    return array
}


// // --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.


describe('miniMax', () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]
    it('takes an array of numbers and returns an array of the minimum and maximum numbers in that order.', () => {
      expect(miniMax(nums1)).toEqual(expect.arrayContaining([-8, 90]));
      expect(miniMax(nums2)).toEqual(expect.arrayContaining([5, 109]));
    })
})

// Successful Failure 
// ● miniMax › takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

//     ReferenceError: miniMax is not defined


// Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// // b) Create the function that makes the test pass.

// Pseudo Code 
// create a function : miniMax 
// takes in an array of numbers (array)= parameter 
// according to google, there are two built in methods in js of Math.min and Math.max that help get the minimum and maximum values from an array 
// Output should be an array with the minimum and maximum values, in that order. 

const miniMax = (array) => {
    let minimum = Math.min(...array)
    let maximum = Math.max(...array)
    let result =  ([minimum, maximum])
    return result
}


// // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// // a) Create a test with an expect statement using the variables provided.

describe('mixedArray', () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    it('takes in two arrays as arguments and returns one array with no duplicate values.', () => {
      expect(mixedArray(testArray1, testArray2)).toEqual(expect.arrayContaining([3, 7, 10, 5, 4, 8, 2, 1]));
    })
})

// Successful Failure 
// ● mixedArray › takes in two arrays as arguments and returns one array with no duplicate values.
// ReferenceError: mixedArray is not defined


// b) Create the function that makes the test pass.
// Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// Pseudo Code 
// create a function mixedArray 
// input is two arrays 
// output should be an array of mixed data from the two arrays but with no duplicate values 
// according to google, 
    // we can use the spread (...) operator to concatenate the array 
    // we use ...new Set to create a distinct set of elements, also, Set allows for a value to only occur once, therefore, all duplicate values will be removed from the new array 
    // then use the spread operator to convert the Set into a new array 


const mixedArray = (array1, array2) => {
   return  [...new Set([...array1 ,...array2])]
}
