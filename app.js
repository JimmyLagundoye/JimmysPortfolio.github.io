const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')


}

hamburgerButton.addEventListener('click', toggleButton)

const coin = document.querySelector('#coin');
const button = document.querySelector('#flip');
const status = document.querySelector('#status');
const heads = document.querySelector('#headsCount');
const tails = document.querySelector('#tailsCount');

let headsCount = 0;
let tailsCount = 0;


function deferFn(callback, ms) {
    setTimeout(callback, ms);
}

function processResult(result) {
    if (result === 'heads') {
        headsCount++;
        heads.innerText = headsCount;
    } else {
        tailsCount++;
        tails.innerText = tailsCount;
    }
    status.innerText = result.toUpperCase();
}

function flipCoin() {
    coin.setAttribute('class', '');
    const random = Math.random();
    const result = random < 0.5 ? 'heads' : 'tails';
    deferFn(function () {
        coin.setAttribute('class', 'animate-' + result);
        deferFn(processResult.bind(null, result), 2900);
    }, 100);
}

button.addEventListener('click', flipCoin);

// Selecting the elements from our HTML and storing them in variables
let password = document.getElementById('password')
let generateBtn = document.getElementById('generateBtn')
let copyBtn = document.getElementById('copyBtn')

// Function to generate a random 12 character password
function generatePassword() {
    // Declare a characters variable that is a string of characters we build our random password from
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // Setting a value for how many character we want our password to be
    let passwordLength = 12
    // Declare an empty string to store the password in
    let passwordString = ""
    // Loop through our character string 12 times selecting a random letter each time
    for (let i = 0; i < passwordLength; i++) {
        // Generate a random number to reperesent the index of the letter we randomly select from the character string
        let randomNumber = Math.floor(Math.random() * characters.length)
        // Add the character at the index of the randoly created number to our password string
        passwordString += characters.substring(randomNumber, randomNumber + 1)
    }
    // Set the value of our password box to the randomly generated password string
    password.value = passwordString
}

function copyPassword() {
    // Copying the value of the passwordString to our clipboard
    navigator.clipboard.writeText(password.value)
    // window alert confirming the password has been copied to clipboard
    alert("Password Copied to Clipboard!")
}

// calling the generate password function on click
generateBtn.addEventListener('click', generatePassword)

// calling the coppy password function on click
copyBtn.addEventListener('click', copyPassword)