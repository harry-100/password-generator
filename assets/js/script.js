// Assignment code here

// Alerts and Prompts

alert("Welcome to the World's most secure Password generator. Please click 'Generate Password' button");


var generatePassword = function() {
  
  alert("You will be asked a series of questions to customize the password for you.");
  passwordLength = prompt("Please enter a number between 8 and 128");
  
  // check if the input for password length is valid

  for (var i = 0; i < 2; i++){
    
    if (passwordLength<8 || passwordLength>128) {
      passwordLength = prompt("This is invalid number. Please enter a number between 8 and 128");
      continue;
      
    }
  }  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Maximum Attempts exceeded. Please restart by clicking 'Generate Password' button");
    return "";
  }
 
  // ask for various types of characters to be included in the password

  var includeLowerCase = confirm("Do you want to include lower case?");
  var includeUpperCase = confirm("Do you want to include uppercase?");
  var includeNumbers = confirm("Do you want to include numbers")
  var includeSpecicalCharacters = confirm("Do you want to include special characters like ! # @ $ % ?");

  // create array for storing different characters

  const lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numerals = "0123456789"
  const specialChar = "/^[!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?]*$/";

  // Generate password  based on User Input
  var optionsCount = 0;
  var listOfChar = "";
  if(includeLowerCase) {
    listOfChar = listOfChar.concat(lowerCaseAlphabets);
    optionsCount = optionsCount + 1;
  }
  if (includeUpperCase) {
    listOfChar =  listOfChar.concat(upperCaseAlphabets);
    optionsCount = optionsCount + 1;
  };

  if(includeNumbers) {
    listOfChar = listOfChar.concat(numerals);
    optionsCount = optionsCount + 1;
  }

  if(includeSpecicalCharacters){
    listOfChar = listOfChar.concat(specialChar);
    optionsCount = optionsCount + 1; 
  }
  // check if at least one option is selected
  
  if(optionsCount < 1) {
    alert("You need to select at least one option to generate password. Please start over by clicking 'GENERATE PASSWORD' button.")
  }

  var maxNumber = listOfChar.length - 1;
  var minNumber = 0
  var passwordChar = "";

  for (var i=0; i<passwordLength; i++) {
    charPosition = Math.floor(Math.random()*(maxNumber-minNumber) + minNumber);
    
    passwordChar =  passwordChar + listOfChar[charPosition];
  };
  return passwordChar;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var passwordText = document.querySelector("#password");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

 }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
