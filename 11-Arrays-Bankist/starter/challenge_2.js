

const calcAverageHumanAge = function(ages) {
  const humanAges = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4);
  const adults = humanAges.filter(age => age >= 18);
     return adults.reduce((sum, age) => sum + age, 0) / adults.length;
     // consta average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
}

const averageAge1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(averageAge1);

const averageAge2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(averageAge2);