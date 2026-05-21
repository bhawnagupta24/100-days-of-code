let add = (...numbers) => {
  let sum = 0;

  numbers.forEach(function(value, index, arr) {
    console.log("Value:", value);

    sum += value;
  });

  console.log("Total Sum:", sum);
};


export default add;