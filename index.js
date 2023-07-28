
let password = document.querySelector("#password"),
    comfirmPassword = document.querySelector("#comfirm-password")

let error = document.querySelector("#error-message")

let error2 = document.querySelector("#error-message2")


let button = document.querySelector("#btn")





button.addEventListener("click", ()=>{

    if (password.length  < 8) {

        event.preventDefault();

        return error.textContent = "you password must be at least 8 character "
    
    } 



}) 






  function validateForm() {
    event.preventDefault(); // Prevent form submission for now
  
    // Get the values of the password and confirm password fields
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    // Check if the passwords match
    if (password !== confirmPassword ) {
      // Display the error message
      const errorMessage = document.getElementById("error-message2");
      errorMessage.textContent = "Password do not match"
    } else {
      // Passwords match, you can submit the form or perform other actions
      //document.getElementById("error-message").style.display = "none";
      // Uncomment the line below to submit the form programmatically
       document.getElementById("loginForm").submit();
    }
  }
  






