function longestSequence(arr) {
    let longestNum = null;
    let longestLength = 0;
    let currentNum = null;
    let currentLength = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== currentNum) {
        currentNum = arr[i];
        currentLength = 1;
      } else {
        currentLength++;
      }
  
      if (currentLength > longestLength) {
        longestNum = currentNum;
        longestLength = currentLength;
      }
    }
  
    console.log(`Longest: ${longestLength}`);
    console.log(`Number: ${longestNum}`);
  }
  
  const myArray = [1, 2, 2, 4, 5, 6, 7, 8, 8, 8];
  longestSequence(myArray);
  