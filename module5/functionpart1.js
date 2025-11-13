let temparetur;
let sum;
let meanTemper;

function getMeanTemp() {
  sum = 0;
  for(let i = 0; i < temparetur.length; i++){
    sum += temparetur[i]
     
  }
  console.log(sum);  
  meanTemper = sum / temparetur.length
  console.log(`mean: ${meanTemper}`);
  
}

temparetur = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();

temparetur = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();

// ------------------------
function getElement(element, index) {
  return element[index]
}

let names = ["nirosh","prasanna","edirisinghe"]
let name = getElement(names,2)
console.log(name);


// -------------------

function getMeanTemparetur(tempareture) {
  let sum = 0;
  for (let i = 0; i < tempareture.length; i++) {
    sum += tempareture[i]   
  }
  return sum / tempareture.length
}

let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemparetur(day1)}`);

let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];

console.log(`mean: ${getMeanTemparetur(day2)}`);