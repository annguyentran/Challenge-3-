// Assignment Code
var generateBtn = document.querySelector("#generate");

function random(min, max) {
  if (!max) {
    max = min
    min = 0
  }
} 

function generatePassword() {

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

var lowercaseconfirmation = window.confirm("Add lowercase letters?")
var lowercaselists = ("a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z")

var uppercaseconfirmation = window.confirm("Add uppercase letters?")
var uppercaselists = ("A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z")

var specialcharactersconfirmation = window.confirm("Add special character letters?")
var specialcharacterslists = ("!, @, #, $, %, ^, &, *, ?")

var numberconfirmation = window.confirm("Add numbers?")
var numberlists = ("0, 1, 2, 3, 4, 5, 6, 7, 8, 9")

var randomlist = []

if (lowercaseconfirmation === true) {
randomlist.push(lowercaselists)
} 

if (uppercaseconfirmation === true) {
  randomlist.push(uppercaselists)
}

if (specialcharactersconfirmation === true) {
  randomlist.push(specialcharacterslists)
}

if (numberconfirmation === true){
  randomlist.push(numberlists)
}

var randomPassword = ""

for (var i = 0; i < passwordLength; i++) {
var newRandomList = randomlist[random(randomlist.length)]
var characterList = newRandomList[random(newRandomList.length)]
randomPassword += characterList
}

console.log(randomPassword);


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

