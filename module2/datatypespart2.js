// object
let test1 = {
  name:'nirosh',
  age:24,
  address:'meepitiya'
}

console.log(typeof test1);
console.log(test1);

// array
let days = [];
days = ["sun","mon","tue","wen","thu","fri","sat"];
console.log(days);

days[1] = "monday";
console.log(days);
console.log(days[3]);


let name = [["nirosh","prasanna","edirisinghe"],["java","script","essential"]];
console.log(name);
console.log(name[0][2]);
name[1][3] = "part1";
console.log(name[1]);


let user1 = {
  name: 'nirosh',
  age: 24,
  address: 'kurunegala'
}

let user2 = {
  name: 'saman',
  age: 25,
  address: 'melsiripura'
}

console.log(typeof user1);
console.log(user1);
console.log(user2);

let user = [
  {
    name: 'saman',
    age: 25,
    address: 'melsiripura'
  },
  {
    name: 'saman',
    age: 25,
    address: 'melsiripura'
  }
]

console.log(typeof user);
console.log(user[1]);
user[1] = {
  name:"nimal",
  age: 25,
  address: 'melsiripura'
}
console.log(user[1]);
console.log( user);

let names = ["Olivia", "Emma", "Mateo", "Samuel"];

console.log(names.indexOf("Olivia"));

names.push("nirosh");
console.log(names);
names.unshift("edirisinghe");
console.log(names);
console.log(names.length);

names.pop();
console.log(names);

let shiftName = names.shift();
console.log(shiftName);
console.log(names);

names.reverse();
console.log(names);

console.log(names.slice(1));
console.log(names.slice(1,3));
console.log(names.slice(-3));

let otherName = ["kamal","nimal"];
let fullNames = names.concat(otherName);
console.log(fullNames);


// section practice
// 1
let ticket =  {
  from: 'polgahawel',
  to: 'colombo',
  price: 250
}

console.log(`ticket from: ${ticket.from}`);
console.log(`ticket to: ${ticket.to}`);
console.log(`ticket price is ${ticket.price}`);


// 2
let person = {};
person.name = "nirosh";
person.surname = "edirisinghe";

console.log(`I'm ${person.name}`);
console.log(`my surname is ${person.surname}`);


// Array 3
let books = [
  {
    title: 'Speaking JavaScript',
    author: 'Axel Rauschmayer',
    page: 460
  },
  {
    title: 'Programming JavaScript Applications',
    author: 'Eric Elliott',
    page: 254
  },
  {
    title: 'Understanding ECMAScript 6',
    author: 'Nicholas C. Zakas',
    page: 352
  },
]
let newBook = {
  title: 'Learning JavaScript Design Patterns',
  author: 'Addy Osmani',
  page: 254
}
books.push({
  title: 'Learning JavaScript Design Patterns',
  author: 'Addy Osmani',
  page: 254
})
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
console.log(books[3].title);


console.log(books);
console.log(books.slice(2));

books.shift()
console.log(books);

console.log(books.length);

let sum = books[0].page + books[1].page + books[2].page + books[3].page
console.log(sum);


// LAb Section

let contacts = [{
  name: "Maxwell Wright",
  phone: "(0191) 719 6495",
  email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
  name: "Raja Villarreal",
  phone: "0866 398 2895",
  email: "posuere.vulputate@sed.com"
}, {
  name: "Helen Richards",
  phone: "0800 1111",
  email: "libero@convallis.edu"
}];

contacts.push({
  name: "Maisie Haley",
  phone: "0913 531 3030",
  email: "risus.Quisque@urna.ca"
})
console.log(contacts);
 
let firstContact = contacts[0]
console.log(`${firstContact.name}/${firstContact.phone}/${firstContact.email}`);

let lastContct = contacts[contacts.length - 1] 


console.log(`${lastContct.name}/${lastContct.phone}/${lastContct.email}`);









