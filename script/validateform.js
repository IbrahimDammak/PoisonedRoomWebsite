// Validate form input
function validateForm(form) {
    // Get form values
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var email = form.email.value;
    var age = form.age.value;
    var idCardNumber = form.idCardNumber.value;
    var phoneNumber = form.phoneNumber.value;
    var url = form.url.value;
    var PassNumber = form.PassNumber.value;

     // Validate pass
    if (PassNumber == "") {
      alert("Error: PassNumber is required!");
      form.PassNumber.focus();
      return false;
    } else if (PassNumber < 001 || PassNumber >100) {
      alert("Error: Pass Number must be between 001 and 100");
      form.PassNumber.focus();
      return false;
    }




    // Validate first name
    if (firstName == "") {
      alert("Error: First name is required!");
      form.firstName.focus();
      return false;
    }
  
    // Validate last name
    if (lastName == "") {
      alert("Error: Last name is required!");
      form.lastName.focus();
      return false;
    }
  
    // Validate email
    if (email == "") {
      alert("Error: Email is required!");
      form.email.focus();
      return false;
    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      alert("Error: Invalid email address!");
      form.email.focus();
      return false;
    }
  
    // Validate age
    if (age == "") {
      alert("Error: Age is required!");
      form.age.focus();
      return false;
    } else if (age < 18) {
      alert("Error: Age must be 18 or older!");
      form.age.focus();
      return false;
    }
  
    // Validate ID card number
    if (idCardNumber == "") {
      alert("Error: ID card number is required!");
      form.idCardNumber.focus();
      return false;
    } else if (isNaN(idCardNumber) || idCardNumber.length != 8) {
      alert("Error: Invalid ID card number!");
      form.idCardNumber.focus();
      return false;
    }
  
    // Validate phone number
    if (phoneNumber == "") {
      alert("Error: Phone number is required!");
      form.phoneNumber.focus();
      return false;
    } else if (isNaN(phoneNumber) || phoneNumber.length != 8) {
      alert("Error: Invalid phone number!");
      form.phoneNumber.focus();
      return false;
    }

    // url check
    if (url == "") {
      alert("Error: url is required!");
      form.url.focus();
      return false;
    }
  
    // Form is valid
    redirectToSuccessPage();
  }


