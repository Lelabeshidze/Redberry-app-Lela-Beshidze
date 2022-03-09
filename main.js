// function changeColor(){
//     const dotColor = document.getElementById('dot');
//     dotColor.classList.add('dotcolor');
// }


// const dotColor = document.getElementById('dot');
// dotColor.onclick = function() {
//     dotColor.classList.remove('dot');
//     dotColor.classList.add('dotColor');
//   }
const changeColor = () =>{ 
const dotColor = [ ...document.querySelectorAll('#dot')]
 dotColor.forEach ((dot) => {
     dotColor.onclick = function() {
            dotColor.classList.remove('dot');
            dotColor.classList.add('dotColor');
     }
 })
}
changeColor ()

window.onbeforeunload = function() {
    const name = document.getElementById('fname') 
    localStorage.setItem(name, $('#fname').val(name));
    const lastname =  document.getElementById('lname')
    localStorage.setItem(lastname, $('#lname').val(lastname));
    const email = document.getElementById('email')
    localStorage.setItem(email, $('#email').val(email));
    const mobile = document.getElementById('mobile')
    localStorage.setItem(mobile, $('#mobile').val(mobile));
 
 window.onload = function() {
    localStorage.getItem(name);
    localStorage.getItem(lastname);
    localStorage.getItem(email);
    localStorage.getItem(mobile);

 }
    
 }

 
