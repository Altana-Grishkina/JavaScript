

// const calcAverageHumanAge = function(ages) {
//   const humanAges = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4).filter(age => age >= 18);
//   return humanAges.reduce((sum, age) => sum + age, 0) / humanAges.length;
// }

// Challenge 3
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((sum, age, _, arr) => sum + age / arr.length, 0);


const averageAge1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(averageAge1);

const averageAge2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(averageAge2);