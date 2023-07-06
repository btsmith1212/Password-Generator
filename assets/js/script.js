var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
var numArray = "0123456789".split("");
var specArray = "~`!@#$%^&*()_+=-?".split("");
var masterArray = [...uppercaseArray, ...lowercaseArray, ...numArray, ...specArray];
// added character arrays

function generatePassword() {
  var password = "";
  var wantsUppercase = "";

  var passwordLength = prompt("Password must be between 8 and 128 characters. Please select length.");

  var parsedLength = parseInt(passwordLength);


  if (isNaN(parsedLength)) {
    alert("Please type in a number for password length.")
    return null;
  }
// added user check to verify they entered a number

  var min = 8;
  var max = 128;

  if (parsedLength < min || parsedLength > max) {
  alert("Password must be between 8 and 128 characters.");
  return null;
  }

  var wantsUppercase = confirm("Do you want uppercase letters in your password?");
  alert("Uppercase letters will be included in your password.");
  var wantsLowercase = confirm("Do you want lowercase letters in your password?");
  alert("Lowercase letters will be included in your password.");
  var wantsNumbers = confirm("Do you want numbers in your password?");
  alert("Numbers will be included in your password.");
  var wantsSpecial = confirm("Do you want special characters in your password?");
  alert("Special characters will be included in your password.");
  alert("...generating password.");

  wantsUppercase = parseInt(wantsUppercase);
  if (wantsUppercase) {
  masterArray = [...masterArray, ...uppercaseArray]; 
  }

  wantsLowercase = parseInt(wantsLowercase)
  if (wantsLowercase) {
  masterArray = [...masterArray, ...lowercaseArray] 
  }

  wantsNumbers = parseInt(wantsNumbers)
  if (wantsNumbers) {
  masterArray = [...masterArray, ...numArray]
  }

  wantsSpecial = parseInt(wantsSpecial)
  if (wantsSpecial) {
  masterArray = [...masterArray, ...specArray]
  }
  // merged arrays
  // added prompts for criteria

  for (var i = 0; i < 1; i++) {
    password = masterArray[Math.floor(Math.random() * masterArray.length)];
    return ("")
    // added function for password generation
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(password){
  var password = generatePassword();
  var pwTextArea = document.getElementById("password");
  pwTextArea.value = password;
  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
