let insertionSort = (arr)=>{
  arr.forEach((ele,i,array)=>{
    let placed = false;
    for (let j = 0; j < i;j++){
      if(ele<array[j] && placed === false){
        let splicedEle = arr.splice(i,1)
        arr.splice(j,0,splicedEle[0])
        placed = true;
      }
    }
  })
  return arr
};

export default insertionSort;
