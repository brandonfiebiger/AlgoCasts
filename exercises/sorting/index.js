// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      let placeHolder = arr[j];
      if(placeHolder > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = placeHolder;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexofMin = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexofMin]) {
        indexofMin = j;
      }
    }
    if (arr[indexofMin] !== arr[i]) {
      let placeHolder = arr[i];
      arr[i] = arr[indexofMin];
      arr[indexofMin] = placeHolder;
    }
  }
  return arr;
}

function mergeSort(arr) {
  //base case for recursive function
  if (arr.length === 1) {
    return arr;
  }
  //find the center of the array
  const center = Math.floor((arr.length) / 2);
  //slice off the left side of the array
  const left = arr.slice(0, center);
  //slice off the right side of the array
  const right = arr.slice(center);

  //return recursive call to merge and merge sort until
  //each array is broken down to one element 
  //and recursively sorted back together
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  //initialize empty results array
  const results = [];

  //while there is still length in both the left and right arrays
  while (left.length && right.length) {
    //if the 0 index of the left array is less than the 0 index of the right array
    if (left[0] < right[0]) {
      //push the 0 index of the left array into results
      results.push(left.shift());
    } else {
      //otherwise push the 0 index of the right array into the results
      results.push(right.shift());
    }
  }
  //return and array with the results spread in, followed by what's left of the left and right arrays
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
