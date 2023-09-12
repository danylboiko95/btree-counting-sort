function countingSort(arr: number[]): number[] {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  const countArray = new Array(max - min + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i] - min]++;
  }

  const sortedArray: number[] = [];

  for (let i = 0; i < countArray.length; i++) {
    for (let j = 0; j < countArray[i]; j++) {
      sortedArray.push(i + min);
    }
  }

  return sortedArray;
}

function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap arr[i] and arr[i + 1]
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

function generateRandomArray(length: number): number[] {
  const randomArray: number[] = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * 10000000));
  }
  console.log(randomArray);
  return randomArray;
}

function measureSortingTime(arr: number[]): number {
  const startTime = performance.now();
  countingSort(arr);
  //   bubbleSort(arr);
  //   arr.sort((a, b) => a - b);
  const endTime = performance.now();
  return endTime - startTime;
}

function sorting() {
  const datasetCount = 100;
  const datasetSize = 5000;
  let time = [];
  for (let i = 0; i < datasetCount; i++) {
    const randomArray = generateRandomArray(datasetSize);
    const sortingTime = measureSortingTime([...randomArray]);
    console.log(
      `Dataset ${i + 1}: Sorting time = ${sortingTime.toFixed(5)} ms`
    );
    time.push(sortingTime);
  }
  const average = time.reduce((a, v) => a + v, 0) / datasetCount;
  console.log(`average time is: ${average}`);
}

sorting();
