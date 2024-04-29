
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var password = document.getElementById("password");

var dfname = document.getElementById("d-f-name");
var dlname = document.getElementById("d-l-name");
var demail = document.getElementById("d-in-email");
var dpass = document.getElementById("d-in-pass");


function validate(value){

    if(fname.value.length <= 0){
        dfname.textContent = "Firstname cannot not be Empty";
        dfname.style.color = "red";
        dfname.style.display = "block";
        fname.style.borderColor = "red";
    }
    if (fname.value.length < 4) {
      dfname.textContent = "Firstname should contains atleast 4 char";
      dfname.style.color = "red";
      dfname.style.display = "block";
      fname.style.borderColor = "red";
    }
    if (lname.value.length <= 0) {
      dlname.textContent = "Lastname cannot not be Empty";
      dlname.style.color = "red";
      dlname.style.display = "block";
      lname.style.borderColor = "red";
    }
    if (lname.value.length < 4) {
      dlname.textContent = "Lastname should contains atleast 4 char";
      dlname.style.color = "red";
      dlname.style.display = "block";
      lname.style.borderColor = "red";
    }
     if (email.value.length <= 0) {
       demail.textContent = "Looks like this is not an email";
       demail.style.color = "red";
       demail.style.display = "block";
       email.style.borderColor = "red";
     }
    //   if () {
    //     demail.textContent = "Looks like this is not an email";
    //     demail.style.color = "red";
    //     demail.style.display = "block";
    //     email.style.borderColor = "red";
    //   }
      if (password.value.length <= 0) {
        dpass.textContent = "Password cannot not be Empty!!";
        dpass.style.color = "red";
        dpass.style.display = "block";
        password.style.borderColor = "red";
      }
      if(password.value.length < 6 || password.value.length > 12){
        dpass.textContent =
          "Password should contain minimum 6 and maximum 16 characters ";
        dpass.style.color = "red";
        dpass.style.display = "block";
        password.style.borderColor = "red";
      }
      if(fname.value === password.value){
        dpass.textContent = "Password and username should not same";
        dpass.style.color = "red";
        dpass.style.display = "block";
        password.style.borderColor = "red";
        fname.style.borderColor = "red";
      }
      if(lname.value === password.value){
        dpass.textContent = "Password and username should not same";
        dpass.style.color = "red";
        dpass.style.display = "block";
        password.style.borderColor = "red";
        lname.style.borderColor = "red";
      }
    
}

