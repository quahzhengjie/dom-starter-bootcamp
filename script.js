// Please implement exercise logic here

// const words = [
//   ['orange', 'tomato'],
//   ['fire engine', 'basketball'],
// ];

// const coolParagraph = document.createElement('span');
// coolParagraph.innerText = "test";
// document.body.appendChild(coolParagraph);

// var span = document.createElement()
// var row = document.createElement()
// var div = document.createElement()

let index=0;
const words = ['orange', 'tomato','fire engine', 'basketball']

const greybox = document.createElement('div');
greybox.className = 'container';
document.body.appendChild(greybox);

for (let i=0; i<2; i+=1) {
const yellowBox = document.createElement('div');
yellowBox.className = 'row';
greybox.appendChild(yellowBox);

for (let j=0; j<2; j+=1) {
const word = document.createElement('p')
word.className = 'word';
//ADD "word element" to YellowBox Element
yellowBox.appendChild(word);
//ADD IN THE Current Word [whichever index]
word.innerText=words[index]
index+=1
}}






// {/* <div class="container">
//   <div class="row">
//     <span class="word">hello</span>
//     <span class="word">papaya</span>
//   </div>
//   <div class="row">
//     <span class="word">banana</span>
//     <span class="word">world</span>
//   </div>
// </div> */}\