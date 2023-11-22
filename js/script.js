// Get the element with the class 'icon'
const iconElement = document.querySelectorAll('.icon');
const headingEle = document.querySelectorAll('.heading');
const searchItem = document.querySelectorAll('.search-item');
const chatms = document.querySelectorAll('.chat-message');
const input = document.getElementsByTagName('input');
const parper =document.querySelector('.fa-paper-plane');
const makeOffer =document.querySelector('.make-offer');


// console.log(input[1]);
// console.log(parper);
// console.log(makeOffer)

// console.log(chatms[0]);
// console.log(searchItem);
// console.log(headingEle);
// console.log(iconElement);



//clear input

input[1].value = '';

// Add the class 'fa-beat' after 1 second
setTimeout(() => {

  chatms[0].style.visibility = 'initial';

}, 14000);

setTimeout(() => {

  chatms[1].style.visibility = 'initial';

}, 15000);


setTimeout(() => {

  chatms[2].style.visibility = 'initial';

  // hover on make offer
  makeOffer.classList.add('hovered');

},16000);

setTimeout(() => {


  // hover on make offer
  makeOffer.classList.add('hovered');

},17200);



// added value input
setTimeout(() => {

  input[1].focus();

  input[1].value = 'Moneer your offering will be ...$$$$ ?';

  // move parper plane

  parper.classList.add('fa-beat');

},18000);


// Add the class 'fa-beat' after 1 second
setTimeout(() => {

  iconElement.forEach(ele => {
    ele.classList.add('fa-flip');

  });

}, 2000);

setTimeout(() => {

  headingEle.forEach(ele => {
    ele.classList.add('fa-beat');
  });

}, 5000);


setTimeout(() => {

  searchItem.forEach(ele => {
    ele.classList.add('fa-bounce');
  });

}, 8000);



// Remove the class 'fa-flip' after 6 seconds
setTimeout(() => {

  iconElement.forEach(ele => {
    ele.classList.remove('fa-flip');
  });

}, 5000);


// Remove the class 'fa-beat and bounce' after 4 seconds

setTimeout(() => {

  headingEle.forEach(ele => {
    ele.classList.remove('fa-beat');
  });

}, 8000);


setTimeout(() => {

  searchItem.forEach(ele => {
    ele.classList.remove('fa-bounce');
  });

}, 13000);



