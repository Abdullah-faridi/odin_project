const passInput =document.querySelector("#password");
const confirmpassInput = document.querySelector("#confirm-password");
const button = document.querySelector("#btn");
const form = document.querySelector("#myForm");
button.addEventListener("click",function(e){
    
    if(passInput.value!==confirmpassInput.value){
        e.preventDefault();
        alert("password and confirm-password section should be same");
    }
})
