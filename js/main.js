document.getElementById("toggleBtn").addEventListener("click", function() {
    let divList = document.getElementById("second");
    if (divList.style.display === "none") {
      divList.style.display = "block";
      document.getElementById("first").style.display = "none";
    //   document.getElementById("first").style.transform(this.translate);
    } else {
      divList.style.display = "none";
      document.getElementById("first").style.display = "block";
    //   document.getElementById("first").classList.remove("slide-up");
    }
  });



// javascript for form 
//External JS
function validate(){
  var name = document.getElementById("name").value
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length < 5){
    text = "Please write some message";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}