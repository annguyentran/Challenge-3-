// Assignment Code
var generateBtn = document.querySelector("#generate");


/// Pick out a random character function///


function generatePassword() {

  // Opens up a prompt //
var promptInput = window.prompt("How long do you want your password? Min: 8 and Max: 128 (Characters)")

var passwordLength = parseInt(promptInput)

if (isNaN(passwordLength)) {
  window.alert("Invalid. Must be a number")
return
}

if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Invalid. Must be within range")
  return
}

/// Gives the users options on what to add to the password with the lists /// 

var lowercaseconfirmation = window.confirm("Add lowercase letters?")
var lowercaselists = ("abcdefghijklmnopqrstuvwxyz")

var uppercaseconfirmation = window.confirm("Add uppercase letters?")
var uppercaselists = lowercaselists.toUpperCase()

var specialcharactersconfirmation = window.confirm("Add special character letters?")
var specialcharacterslists = ("!@#$%^&*?")

var numberconfirmation = window.confirm("Add numbers?")
var numberlists = ("0123456789")

/// The "true" lists will be put in another list so that it can be pull from there ///

var randomlist = []
var characterOptions = ""

if (lowercaseconfirmation === true) {
characterOptions += lowercaselists; 
///randomlist = randomlist.concat(lowercaselists)
} 

if (uppercaseconfirmation === true) {
  ///randomlist = randomlist.concat(uppercaselists)
  characterOptions += uppercaselists
}

if (specialcharactersconfirmation === true) {
  // randomlist = randomlist.concat(specialcharacterslists)
  characterOptions += specialcharacterslists
}

if (numberconfirmation === true){
//   randomlist  = randomlist.concat(numberlists)
characterOptions += numberlists
}
var newPassword = "";

var maxIndex = characterOptions.length - 1;

for (var i = 0; i < passwordLength; i++) {
var randomIndex = Math.floor(Math.random()*characterOptions.length)
var randomCharacter = characterOptions[randomIndex]
    
newPassword += randomCharacter 

/// randomPassword += characterList
}

console.log(newPassword );

return newPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

