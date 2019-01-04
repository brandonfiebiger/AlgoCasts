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

}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
