//array [2,7,4,9,10,1,12]
//quicksort array

function quickSort(array) {

    if (array.length <=1) {
        return array;
    }
    const pivot = array[0];
    const left = [];
    const right = [];
    for (i = 1 ; i < array.length ; i ++) {
        if(array[i]<pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }

    return[...quickSort(left), pivot , ...quickSort(right)];
}

console.log(quickSort([2,7,4,9,10,1,12]));
console.log(quickSort([8,3,7,5,4,2,1]));