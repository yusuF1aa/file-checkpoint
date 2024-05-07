function insertionSort(arr) {
    // Loop through each element starting from the second one
    for (let i = 1; i < arr.length; i++) {
      // Store the current element
      let key = arr[i];
      // Start from the previous element and move backwards
      let j = i - 1;
      // Shift elements of the sorted part of the array that are greater than 'key' to the right
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--; // Move one step back
      }
      // Insert the key at the correct position
      arr[j + 1] = key;
    }
  
    return arr; // Return the sorted array
  }
  
  // Example usage
  const array = [12, 11, 13, 5, 6];
  console.log("Original array:", array);
  
  const sortedArray = insertionSort(array);
  console.log("Sorted array:", sortedArray);
  