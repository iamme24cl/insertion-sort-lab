// find the min given our original array and remove the element

// now with the new array, again find the min and remove

// keep doing this until the array is empty

// push all these elements into an empty array one by one
// and that will be our new sorted array


function findMinAndRemove(array){
  let min = array[0];
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function selectionSort(array){
  let newMin;
  let sortedArray = [];
  while (array.length !== 0) {
    newMin = findMinAndRemove(array);
    sortedArray.push(newMin)
  }
  return sortedArray;
}
