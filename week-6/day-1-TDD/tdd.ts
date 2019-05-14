//Create a function that takes a list and a value, and returns the index of that value in the list. If the value is not it the list, the function should return -1.

function returnIndex (newList: number[], newValue: number) {

    let searchValue = newList.indexOf(newValue);

    return searchValue;
}

console.log(returnIndex([1, 3, 5], 5));

