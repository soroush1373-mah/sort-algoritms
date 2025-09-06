

//array [8,7,5,1,4,6,8,10]
//mergesort
//this function


function mergeSort(array) {
    //base case
    if (array.length<= 1) return array;

    let midArray = Math.floor(array.length / 2);
    let leftArray = mergeSort(array.slice(0, midArray));
    let rightArray = mergeSort(array.slice(midArray));
    return merge(leftArray , rightArray);

} 

function merge(leftArray , rightArray) {
    let sortedArray = []
    while (leftArray.length && rightArray.length) {
        if (leftArray[0]<rightArray[0]) {
            sortedArray.push(leftArray.shift());
        }
        else {
            sortedArray.push(rightArray.shift());
        }

    } 
    return[...sortedArray , ...leftArray , ...rightArray];
}

console.log(mergeSort([8,7,5,1,4,6,8,10]))
