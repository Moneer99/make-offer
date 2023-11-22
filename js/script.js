// Get the element with the class 'icon'
const iconElement = document.querySelectorAll('.icon');
const headingEle = document.querySelectorAll('.heading');
const searchItem = document.querySelectorAll('.search-item');
const chatms = document.querySelectorAll('.chat-message');
const input = document.getElementsByTagName('input');
const paperPlane =document.querySelector('.fa-paper-plane');
const makeOffer =document.querySelector('.make-offer');
const buttonAnim =document.querySelector('.btn-action');

// console.log(input[1]);
// console.log(paperPlane);
// console.log(makeOffer)

// console.log(chatms[0]);
// console.log(searchItem);
// console.log(headingEle);
// console.log(iconElement);




function moveAction() {

//clear input

input[1].value = '';

// Add the class 'fa-beat' after 1 second to chat message
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

  // move paperPlane plane

  paperPlane.classList.add('fa-beat');

},18000);


//added move Repeat animation button

setTimeout(() => {

  buttonAnim.classList.add('fa-fade');

},20000);


// event when click Repeat button clear all animation 
buttonAnim.addEventListener('click',()=>{

  buttonAnim.classList.remove('fa-fade');
  chatms[0].style.visibility = 'hidden';
  chatms[1].style.visibility = 'hidden';
  chatms[2].style.visibility = 'hidden';
  paperPlane.classList.remove('fa-beat');
  makeOffer.classList.remove('hovered');

});


// Add the class 'fa-beat' after 1 second to all option wrapper
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



// Remove the class 'fa-flip' after 6 seconds from option wrapper items
setTimeout(() => {

  iconElement.forEach(ele => {
    ele.classList.remove('fa-flip');
  });

}, 5000);


// Remove the class 'fa-beat and bounce' after 4 seconds  heading of option items

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


}
// end moveAction function


// Fire the function when the page loads

window.onload = function() {
  moveAction();

};

