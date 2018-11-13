const linearSearch = require('./linear');
let input = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

function binarySearch(arr, value, lo =0, hi = arr.length - 1, counter = 0){
  if(lo > hi) return -1;

  counter++;
  const mid = Math.floor(lo + (hi - lo)/2);
  const midValue = arr[mid];
  if(value < midValue) return binarySearch(arr, value, lo, mid - 1, counter);
  else if(value > midValue) return binarySearch(arr, value, mid + 1, hi, counter);
  else {
    console.log(`Binary search success after ${counter} searches`);
    return mid;
  }
}

if(require.main === module){
  const sorted = input.split(' ').map(num => parseInt(num, 10)).sort((a, b) => a - b);
  const binary = binarySearch(sorted, 50);
  const linear = linearSearch(sorted, 50);
  console.log('linear', linear);
  console.log('binary', binary);
}