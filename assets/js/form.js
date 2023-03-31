function sendEmail(event){
  event.preventDefault();
  
  let templateParams = {
    name: document.getElementById("inputName").value,
    email: document.getElementById("inputEmail").value,
    subject: document.getElementById("inputSubject").value,
    message: document.getElementById("inputMessage").value,
  };

  let {name, email, subject, message} = templateParams;
  
  const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  let validEmail = email.match(emailRegex);
  
  if (!name || !validEmail || !subject || !message) {
    alert("One or more input fields are invalid. Please input all fields and check if your email address is valid.");
  } else {
    emailjs.send('service_yp6fkt7', 'template_qx4zl7x', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert("Message sent successfully!");
       document.getElementById("inputName").value = "";
       document.getElementById("inputEmail").value = "";
       document.getElementById("inputSubject").value = "";
       document.getElementById("inputMessage").value = "";
    }, function(error) {
       console.log('FAILED...', error);
       alert("Error: Message couldn't be sent. Please retry.");
    });
  }
}

document.getElementById("submitBtn").addEventListener("click", sendEmail);

console.log(process.env.API_KEY)