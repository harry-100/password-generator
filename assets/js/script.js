// Assignment code here

// Alerts and Prompts

alert("Welcome to the World's most secure Password generator. Please click 'Generate Password' button");
var generatePassword = function() {
  
  alert("You will be asked a series of questions to customize the password for you.");
  var passwordLength = prompt("Please specify length of the password between 8 and 128 characters.");

  if (passwordLength<8 || passwordLength>128) {
    prompt("This is invalid number. Please enter a number between 8 and 128");
  };
  console.log(passwordLength);

  var includeUpperCase = confirm("Do you want to include uppercase?");
  var includeNumbers = confirm("Do you want to include numbers")
  var includeSpecicalCharacters = confirm("Do you want to include special characters like ! # @ $ % ?");

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
