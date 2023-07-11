let formsubmit = document.querySelector('.vicar-btns');
let emailinput = document.querySelector('.email');
const form = document.querySelector('.subscribe-form')

// function form (e){
//     e.preventDefaullt();
//     console.log('click')


// }
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (emailinput.value == '') {
        alert("Email is required")
    }
})
// formsubmit.addEventListener('submit',  (e)=>{
//     e.preventDefault();
//     console.log('click')
//     if (email.value == '') {
//                 alert("Email is required")
//             }

// })
// location.ref("footer.html") 
