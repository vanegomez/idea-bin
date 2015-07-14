function addTwo(addend) {
  return addend + (true + true);
}

function add(num1, num2) {
  return num1 + num2;
}

function sum(numbers) {
  return numbers.reduce(function (total, number) {
    return total + number;
  })
}
