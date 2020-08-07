

class ArrayMethods {
    constructor() {

    }


    /*
        @params - array 1
        @params - array 2
        compare both arrays, does not do deep compare of objects
        return boolean
    */
    isEqual(arr1, arr2) {

        // return false if one or both arguments are not arrays
        if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

        // return false if both arrays are not the same length
        if (arr1.length !== arr2.length) return false;

        const arr1Sorted = arr1.sort()
        const arr2Sorted = arr2.sort()

        const notEqual = arr1Sorted.find((element, index) => {
            if (typeof element === 'object' && typeof arr2Sorted[index] === 'object') {
                return false
            }
            return element !== arr2Sorted[index]
        });

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
        if (!Array.isArray(arr) || arr.length === 0) {
            return newArr
        }
        arr.forEach(element => {
            if (Array.isArray(element)) {
                return this.flatten(element, newArr)
            } else {
                newArr.push(element)
            }
        });
        return newArr
    }




}



module.exports = ArrayMethods