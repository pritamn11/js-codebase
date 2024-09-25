function getSum(...number){
    let total = 0
    for (let n of number){
        total += n;
    }
    return total
}

// console.log(getSum(1,2,3,4,5));

const matchElements = (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (i !== j && array[i] === array[j]) {
          return `Match found at ${i} and ${j}`;
        }
      }
    }
    return "No matches found 😞";
  };
  
  const fruit = ["🍓", "🍐", "🍊", "🍌", "🍍", "🍑", "🍎", "🍈", "🍊", "🍇"];
  
console.log(matchElements(fruit)); // "Match found at 2 and 8"

