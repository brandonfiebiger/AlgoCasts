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









function merge(left, right) {
  //initialize empty results array
  let results = [];
  // while there are still elements in the left and right arrays
  while (left.length && right.length) {
    //if the first element of the left array is less than the first element in the right array
    if (left[0] < right[0]) {
      // Shift the first element off of the left array and push it into the results array
      results.push(left.shift());
    } else {
      //otherwise Shift the first element out of the right array and push it into the results array
      results.push(right.shift());
    }
  }
  //at last return a new array spreading in the results array first
  //then spread in what's left of the right && left arrays, it does not matter which
  //order because at least one of them has to be empty
  return [...results, ...right, ...left];
}

function mergeSort(arr) {
  //setup base case for recursion
  // if the length of the array is exactly one, we will return it
  if (arr.length === 1) {
    return arr;
  }
  //find the center of the array and slice it into two halves to feed
  //to the merge function
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  //return a recursive call to merge and mergSort
  //this will break down the array until there is one element and 
  //return all of those single elements which will all
  //be joined and sorted by the recursive call to merge being returned
  return merge(mergeSort(left), mergeSort(right));
}















module.exports = { bubbleSort, selectionSort, mergeSort, merge };

// function mergeSort(arr) {
//   //base case for recursive function
//   if (arr.length === 1) {
//     return arr;
//   }
//   //find the center of the array
//   const center = Math.floor((arr.length) / 2);
//   //slice off the left side of the array
//   const left = arr.slice(0, center);
//   //slice off the right side of the array
//   const right = arr.slice(center);

//   //return recursive call to merge and merge sort until
//   //each array is broken down to one element 
//   //and recursively sorted back together
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   //initialize empty results array
//   const results = [];

//   //while there is still length in both the left and right arrays
//   while (left.length && right.length) {
//     //if the 0 index of the left array is less than the 0 index of the right array
//     if (left[0] < right[0]) {
//       //push the 0 index of the left array into results
//       results.push(left.shift());
//     } else {
//       //otherwise push the 0 index of the right array into the results
//       results.push(right.shift());
//     }
//   }
//   //return and array with the results spread in, followed by what's left of the left and right arrays
//   return [...results, ...left, ...right];
// }