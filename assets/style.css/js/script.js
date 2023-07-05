// Assignment code here
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_+=-?";
var min = 8;
var max = 128;
// added character arrays
function generatePassword() {
var password = "";
var passwordInput = "";
var passwordLength = prompt("Password must be between 8 and 128 characters. Please select length.");
passwordLength = parseInt(passwordLength);
if (numbet < min && numbet > 128){
  alert("Password must be between 8 and 128 characters.");
  return "";
}
var passwordInput = prompt("Password can only include letters (upper and lowercase), numbers, and special characters. Please select characters to use.");
passwordInput = parseInt(passwordInput);
if (passwordInput ){


}
// added prompts for criteria
for (var i = 0; i<passwordLength; i++) {
password = passwordInput[Math.floor(Math.random() * passwordInput.length)]
// added function for password generation
}


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
