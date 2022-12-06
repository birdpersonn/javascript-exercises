const removeFromArray = function(arr, ...removeItems) {
    newArr = arr;
    for(let i = 0; i < removeItems.length; i++) {
        newArr = newArr.filter((item) => item !== removeItems[i]);
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
