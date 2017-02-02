let bubbleSort = (arr)=>{
  for (let i = 0; i<arr.length;i++){
    if (arr[i]>arr[i+1]){
      arr.splice(i,0,arr.splice(i+1,1)[0]);
    }
  }
  return (check(arr))
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
