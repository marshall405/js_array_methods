

class ArrayMethods {
    /*
        @params - array 1
        @params - array 2
        compare both arrays, does not do deep compare of objects
        return boolean
    */
    isEqual(arr1, arr2) {
        const arr1Copy = this.flatten([...arr1])
        const arr2Copy = this.flatten([...arr2])
        // return false if one or both arguments are not arrays
        if (!Array.isArray(arr1Copy) || !Array.isArray(arr2Copy)) return false;

        // return false if both arrays are not the same length
        if (arr1Copy.length !== arr2Copy.length) return false;

        const arr1Sorted = arr1Copy.sort()
        const arr2Sorted = arr2Copy.sort()

        const notEqual = arr1Sorted.find((element, index) => {

            // if both items are of 'object' we will consider them equal
            if (typeof element === 'object' && typeof arr2Sorted[index] === 'object') return false;

            // if both items are of 'function' we will consider them equal
            if (typeof element === 'function' && typeof arr2Sorted[index] === 'function') return false;

            // return false if both items are equal
            return element !== arr2Sorted[index]

        });

        // if notEqual is undefined - we did not find any items that are not equal
        if (!notEqual) return true;

        return false;

    }


    /*
        @params - array to be flattened
        @params - optional second arg for new array, default = []
        return new 1 dimensional array
    */
    flatten(arr, newArr = []) {

        // if newArr is not an array, set it to an empty array
        if (!Array.isArray(newArr)) {
            newArr = []
        }

        // return empty Array if first argument is not an array or its an empty array
        if (!Array.isArray(arr) || arr.length === 0) {
            return newArr
        }

        //loop through array, checking each item - if item is an array, we will call flatten again
        arr.forEach(element => {
            if (Array.isArray(element)) {
                return this.flatten(element, newArr)
            } else {
                newArr.push(element)
            }
        });

        return newArr
    }

    /* 
        @params - array to be shuffled
        Does not mutate orignal array
        return new array
    */
    shuffle(arr) {
        const copy = [...arr]

        const newArr = []

        while (copy.length > 0) {
            const index = Math.floor((Math.random() * copy.length))
            newArr.push(copy[index])
            copy.splice(index, 1)
        }

        return newArr

    }

}



module.exports = new ArrayMethods()

// mostCommon - returns the most common item 
// leastCommon - returns the least common item
