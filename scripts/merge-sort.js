function split(array) {
 if (array.length < 2) {
 return array
 }
 var splitArray = Math.floor(array.length/2)
 var leftArray = array.slice(0, splitArray)
 var rightArray = array.slice(splitArray, array.length)
 return merge(split(leftArray),split(rightArray));
}

function merge(leftArray,rightArray) {
 let completedArray = [];
  while (leftArray.length  && rightArray.length){
   if (leftArray[0] < rightArray[0]) {
     completedArray.push(leftArray.shift())
   } else if (leftArray[0] > rightArray[0]) {
     completedArray.push(rightArray.shift())
   }
    return completedArray.concat(rightArray.concat(leftArray))
}

export default mergeSort;
