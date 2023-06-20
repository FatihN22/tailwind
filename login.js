const passInput = document.getElementById('pass');
const showpass = document.getElementById('showPass');

showpass.addEventListener('click',showInput)

function showInput(){
    if(passInput.type === "password"){
        passInput.type = "text";
        showpass.classList.remove('fa-eye-slash');
        showpass.classList.add('fa-eye');
    }else{
        passInput.type = "password";
        showpass.classList.remove('fa-eye');
        showpass.classList.add('fa-eye-slash');
    }
}
