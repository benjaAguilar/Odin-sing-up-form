let submit = document.querySelector("#s-button");

submit.addEventListener("click", ()=>{
    let password = document.querySelector("#password");
    let rPassword = document.querySelector("#r-password");
    let match = document.querySelector("#match");
    
    if(password.value != rPassword.value){
        
        event.preventDefault();

        match.textContent = "* Passwords do not match"
        password.classList.add("not-match");
        rPassword.classList.add("not-match");
    }
});