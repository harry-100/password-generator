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

  // create array for storing different characters

  const lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numerals = "0123456789"
  const specialChar = "/^[!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?]*$/";

  // Generate password  based on User Input

  var listOfChar = lowerCaseAlphabets;
  if (includeUpperCase) {
    listOfChar =  listOfChar.concat(upperCaseAlphabets);
  };

  if(includeNumbers) {
    listOfChar = listOfChar.concat(numerals);
  }

  if(includeSpecicalCharacters){
    listOfChar = listOfChar.concat(specialChar); 
  }

  var maxNumber = listOfChar.length - 1;
  console.log(maxNumber);
  var minNumber = 0
  var passwordChar = "";

  for (var i=0; i<passwordLength; i++) {
    charPosition = Math.floor(Math.random()*(maxNumber-minNumber) + minNumber);
    
    passwordChar =  passwordChar + listOfChar[charPosition];
  };
  console.log("the password is = ", passwordChar);
  return passwordChar;
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
