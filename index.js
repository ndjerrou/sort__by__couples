function generateRandomCouples(numbers) {
  const output = [];

  const sortedNumbers = numbers.sort(() => Math.random() - 0.5);

  for (let i = 0; i < sortedNumbers.length; i += 2) {
    if (i + 1 < sortedNumbers.length) {
      output.push([sortedNumbers[i], sortedNumbers[i + 1]]);
    } else {
      const lastCouple = output[output.length - 1];
      lastCouple.push(sortedNumbers[i]);
      console.log(lastCouple);
      console.log(i);
    }
  }

  return output;
}

const res = generateRandomCouples([1, 2, 3, 4, -1, -2, 4, 5, 9]);

console.log(res);
