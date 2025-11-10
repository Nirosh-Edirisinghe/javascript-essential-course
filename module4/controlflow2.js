let n = 0;
while (n < 101) {
  console.log(n);
  n += 1

}


// for loop

let num = [10, 20, 30, 40, 50]
let sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += num[i]
  console.log(sum);

}

let user = {
  name: 'nirosh',
  lastName: 'edirisinghe',
  age: 24,
  email: 'nirosh1111me@gmail.com'
}
for (let key in user) {
  console.log(`${key} : ${user[key]}`);

}

// continue key word
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue
  }
  console.log(i);
}


// section practice
// test 1
let number = 100
while (number >= 0) {
  console.log(number);
  number -= 10;

}


// test 3
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

for (let number of numbers) {
  console.log(number);
  if (number % 2 == 0) {
    console.log('even :' + number);
  }
  else if (number > 10 && number < 60) {
    console.log('limited number :' + number);

  }
}