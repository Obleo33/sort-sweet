let newArray = [];

let insertionSort = (arr)=>{
  newArray.push(arr.shift());
  arr.forEach((num)=>{
    sort(num);
  });
  return newArray
};

let sort = (num)=>{
  var placed = false;
  newArray.forEach((ele,i,array)=>{
    if(num<ele && placed === false){
     placed=true;
     newArray.splice(i,0,num)
    }
    else if (placed === false && i===array.length-1) {
      newArray.push(num);
      placed = true;
    }
  });
  return (newArray);
};

export default insertionSort;
