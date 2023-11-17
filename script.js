// Assignment Code
var generateBtn = document.querySelector("#generate");

// assign variables for lowercase, uppercase, number, and special characters
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + '"';



// Add event listener to generate button
generateBtn.addEventListener("click", function(){

  // used in calculating the iterations of the for loop
  var typeN = 0;

  // open prompt to get the password length from the user
  var passLength = window.prompt("Choose a length between 8 and 128.");

  // prevent from input smaller than 8 or greater than 128 
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("You must choose a length between 8 and 128!");
  };

  // several prompts for selecting the criteria
  var lowerCaseSelect = window.confirm("Do you want your password to have any 🔡 lowercase letters?");

  var upperCaseSelect = window.confirm("Do you want your password to have any 🔠 uppercase letters?");

  var numberSelect = window.confirm("Do you want your password to have any 🔢 numbers?");

  var specialSelect = window.confirm("Do you want your password to have any 🔣 special characters?");

  // validate that at least one criteria is selected
  while (!(lowerCaseSelect || upperCaseSelect || numberSelect || specialSelect)){
    alert("You must choose at lease one criteria!⛔️");
    var lowerCaseSelect = window.confirm("Do you want your password to have any 🔡 lowercase letters?");

    var upperCaseSelect = window.confirm("Do you want your password to have any 🔠 uppercase letters?");

    var numberSelect = window.confirm("Do you want your password to have any 🔢 numbers?");

    var specialSelect = window.confirm("Do you want your password to have any 🔣 special characters?");
  };

  // count the number of selected types(criteria)
  if (lowerCaseSelect){
    typeN++;
  };
  if (upperCaseSelect){
    typeN++;
  };
  if (numberSelect){
    typeN++;
  };
  if (specialSelect){
    typeN++;
  };

// function declaration: generate password based on the selected criteria
  function generatePassword(length) {
    let result = '';
      for ( let i = 0; i < length; i++ ) {
        if (lowerCaseSelect){
          var lowerCaseLength = lowerCase.length;
          result += lowerCase.charAt(Math.floor(Math.random() * lowerCaseLength));
        };
        if (upperCaseSelect){
          var upperCaseLength = upperCase.length;
          result += upperCase.charAt(Math.floor(Math.random() * upperCaseLength));
        };
        if (numberSelect){
          var numberLength = number.length;
          result += number.charAt(Math.floor(Math.random() * numberLength));
        };
        if (specialSelect){
          var specialCharLength = specialChar.length;
          result += specialChar.charAt(Math.floor(Math.random() * specialCharLength));
        };
      };
      return result;
    };
  
    // calculate the iteration needed
    var iteration = Math.floor(passLength/typeN) + 1;

    // create the long password
    var longPassword = generatePassword(iteration);

    // adjust the length
    var password = longPassword.slice((longPassword.length)-Number(passLength));

    // write password to the #password input
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  );