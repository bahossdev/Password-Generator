// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // Function declaration
// function generatePassword() {

// }
// it has to be prompted with click on the bottun NOT on page opening!!
// 1st prompt: Welcome to Password Generator! Please press Okay to continue.


var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + '"';
var typeN = 0;
var lowerCaseN = 1;
var upperCaseN = 1;
var numberN = 1;
var specialCharN =1;
var passLength = window.prompt("Choose a length between 8 and 128.");





while (passLength < 8 || passLength > 128) {
  passLength = prompt("You must choose a length between 8 and 128!");
};


var lowerCaseSelect = window.confirm("Do you want your password to have any 🔡 lowercase letters?");
console.log(lowerCaseSelect);
if (lowerCaseSelect) {
  lowerCaseN = 0;
};

var upperCaseSelect = window.confirm("Do you want your password to have any 🔠 uppercase letters?");
console.log(upperCaseSelect);
if (upperCaseSelect) {
  upperCaseN = 0;
};

var numberSelect = window.confirm("Do you want your password to have any 🔢 numbers?");
console.log(numberSelect);
if (numberSelect) {
  numberN = 0;
};

var specialSelect = window.confirm("Do you want your password to have any 🔣 special characters?");
console.log(specialSelect);
if (specialSelect) {
  specialCharN = 0;
};

while (!(lowerCaseSelect || upperCaseSelect || numberSelect || specialSelect)){
  alert("You must choose at lease one criteria!⛔️");
  var lowerCaseSelect = window.confirm("Do you want your password to have any 🔡 lowercase letters?");
  console.log(lowerCaseSelect);
  if (lowerCaseSelect) {
    lowerCaseN = 0;
  };

  var upperCaseSelect = window.confirm("Do you want your password to have any 🔠 uppercase letters?");
  console.log(upperCaseSelect);
  if (upperCaseSelect) {
    upperCaseN = 0;
  };

  var numberSelect = window.confirm("Do you want your password to have any 🔢 numbers?");
  console.log(numberSelect);
  if (numberSelect) {
    numberN = 0;
  };

  var specialSelect = window.confirm("Do you want your password to have any 🔣 special characters?");
  console.log(specialSelect);
  if (specialSelect) {
    specialCharN = 0;
  };
};
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
console.log(typeN);

// if (!(lowerCaseSelect || upperCaseSelect || numberSelect || specialSelect)){
//   alert("You must choose at lease one criteria!⛔️");
//   askUser();
// }




function generatePassword(length) {
  let result = '';
  for ( let i = 0; i < length; i++ ) {
    if (lowerCaseSelect){
      var lowerCaseLength = lowerCase.length;
      result += lowerCase.charAt(Math.floor(Math.random() * lowerCaseLength));
      lowerCaseN++;
    };
    if (upperCaseSelect){
      var upperCaseLength = upperCase.length;
      result += upperCase.charAt(Math.floor(Math.random() * upperCaseLength));
      upperCaseN++;
    };
    if (numberSelect){
      var numberLength = number.length;
      result += number.charAt(Math.floor(Math.random() * numberLength));
      numberN++;
    };
    if (specialSelect){
      var specialCharLength = specialChar.length;
      result += specialChar.charAt(Math.floor(Math.random() * specialCharLength));
      specialCharN++;
    };
    console.log(result);
};
return result;
};
var iteration = Math.floor(passLength/typeN) + 1;

var longPassword = generatePassword(iteration);
var l = longPassword.length;
var p = Number(passLength);
var n = l - p;
console.log(l, p, n);
var password = longPassword.slice(n);
console.log(password);
