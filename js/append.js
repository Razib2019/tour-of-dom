// 01.Where to Add
const placesList = document.getElementById('places-list');
// 02.What to be Add
const li = document.createElement('li');
li.innerText = 'Pahartoli Bon';
// 03.Add the Child
placesList.appendChild(li);

// 01: Where to add
const mainContainer = document.getElementById('main-container');
// 02: What be add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biryani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salad';
ul.appendChild(li3);

section.appendChild(ul);

// 03:Add the child
mainContainer.appendChild(section);


// Set Inner Html Directly
