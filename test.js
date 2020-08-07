const ArrayMethods = require("./index")


const array = new ArrayMethods()


function assert(expect, actual) {

    // check for empty arrays
    if (expect.length === 0 && actual.length === 0) {
        return console.log(`Expected ${expect}, PASSED!`)
    }

    // check for same lengths and iterate over to check that each item is equal
    if (expect.length === actual.length) {

        const expectedSorted = expect.sort()
        const actualSorted = expect.sort()

        notEqual = expectedSorted.find((element, index) => {
            if (typeof element === 'object' && typeof actualSorted[index] === 'object') {
                return false
            }
            return element !== actualSorted[index]
        });

        if (!notEqual) {
            return console.log(`Expected ${expect}, PASSED!`)
        }

    }

    return console.log(`Expected ${expect}, but got ${actual}`)

}


//     Expected      Actual     
// assert([], array.flattenArray([]))
// assert([], array.flattenArray("should return an empty array"))
// assert([1, 2, 1, 2, 1, 2, 1, 2], array.flattenArray([[1, 2], [1, 2], [1, 2], [1, 2]]))
// assert([1, 2, 3, 4], array.flattenArray([1, 2, 3, 4]))
// assert([1, 2, 3, { testing: "this is a test" }, 4, 5], array.flattenArray([1, 2, 3, 4, { testing: "this is also a test" }, [[[5]]]]))



console.log(array.isEqual([1, 2, 3, 4], [1, 2, 3, 4]))
console.log(array.isEqual([5, 2, 3, 4], [1, 2, 3, 4]))
console.log(array.isEqual([5, {}, [], 4], [5, {}, [], 4]))
