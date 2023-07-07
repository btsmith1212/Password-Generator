var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
var numArray = "0123456789".split("");
var specArray = "~`!@#$%^&*()_+=-?".split("");
var masterArray = [...uppercaseArray, ...lowercaseArray, ...numArray, ...specArray];

// added character arrays




function generatePassword() {
  var password = "";
  var passwordLength = prompt("Password must be between 8 and 128 characters. Please select length.");
  var parsedLength = parseInt(passwordLength);
  var uppercase = confirm("Do you want uppercase in your password.");
  var lowercase = confirm("Do you want lowercase letters in your password?");
  var numbers =  confirm("Do you want numbers in your password?");
  var special = confirm("Do you want special characters in your password?");

  function uppercase () {
    var uppercase = confirm("Do you want uppercase in your password.");
    if (uppercase) {
      alert("Uppercase letters will be included in your password.");
    } else {
      alert("Uppercase letters won't be included in your password.");
    }   
  }
  
  function wantsLowercase () {
    var lowercase = confirm("Do you want lowercase letters in your password?");
    if (lowercase) {
      alert("Lowercase letters will be included in your password.");
    } else {
      alert("Lowercase letters won't be included in your password.");
    }
  }
  
  function wantsNumbers () {
    var numbers =  confirm("Do you want numbers in your password?");
    if (numbers) {
      alert("Numbers will be included in your password.");
    } else {
      alert("Numbers won't be included in your password.");
  }
  }
  
  function wantsSpecial () {
  var special = confirm("Do you want special characters in your password?");
  if (special) {
      alert("Special characters will be included in your password.");
    } else {
      alert("Special characters won't be included in your password.");
    }
  }

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

  if (uppercase) {
  masterArray = [...masterArray, ...uppercaseArray]; 
  }

  if (lowercase) {
  masterArray = [...masterArray, ...lowercaseArray] 
  }

  if (numbers) {
  masterArray = [...masterArray, ...numArray]
  }

  if (special) {
  masterArray = [...masterArray, ...specArray]
  }
  
  // merged arrays
  // added prompts for criteria

  for (var i = 0; i < parsedLength; i++) {
    password = password + masterArray[Math.floor(Math.random() * masterArray.length)];
    // added function for password generation
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(password){
  var password = generatePassword(); console.log(password);
  var pwTextArea = document.getElementById("password");
  pwTextArea.value = password;
  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
