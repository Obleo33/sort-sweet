let bubbleSort = (arr)=>{
  for (let i = 0; i<arr.length;i++){
    let current = arr[i];
    let next = arr[i+1];
    if (next<current){
      arr[i] = next;
      arr[i+1] = current;
    } else{
      check(arr)
    }
  }
  return(arr)
}

let check = (arr)=>{
  for (let i = 0; i<arr.length;i++){
    if (arr[i]>arr[i+1]){
      bubbleSort(arr)
    }
  }
  return(arr)
}


export default bubbleSort;
