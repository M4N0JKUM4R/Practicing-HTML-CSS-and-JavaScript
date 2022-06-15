const generatePasswordBtn = document.querySelector("#generate-password")
const generatedPasswordField = document.querySelector(".generated-password")
const passwordLengthEl = document.querySelector(`input[name="password-length"]`)

const upperCaseInput = document.querySelector("input[name='uppercase-input']")
const lowerCaseInput = document.querySelector("input[name='lowercase-input']")
const numberInput = document.querySelector("input[name='number-input']")
const specialCharInput = document.querySelector("input[name='symbol-input']")
const strength = document.querySelector(".password-strength-meter .strength")
const checkboxes = document.querySelectorAll("input[type='checkbox'");
let password = ""
let subpassword = []
let strengthNumber = 0


const upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz"
const numbers = "123456789"
const specialCharacters = " !#$%&()*+,-./:;<=>?@[\]^_{|}~"


function getUpperCase() {
    return upperCaseLetter[Math.floor(Math.random() * upperCaseLetter.length)]
}

function getLowerCase() {
    return lowerCaseLetter[Math.floor(Math.random() * lowerCaseLetter.length)]
}

function getnumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getspecialCharacters() {
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
}

generatePasswordBtn.addEventListener("click", () => {
    password = ""
    
    generatePassword();
   // strengthMeter();
})

const generatePassword = () => {
    let passwordLength = passwordLengthEl.value;
    // Include UpperCase Letters
    console.log("Subpassword:")
    for(let i = 0; i < passwordLength; i++) {
        let randomNumber = generateMainArray()
        password += randomNumber;
      
        console.log({subpassword})
    }    
    
    if(!passwordLengthEl.value) {
        console.log("No input")
        generatedPasswordField.innerHTML = "Password length field is empty"
        passwordLengthEl.classList.add("error")
    } else if(passwordLengthEl.value <= 0 || passwordLengthEl.value >= 30) {
        generatedPasswordField.innerHTML = "Password length cannot be <= 0 or >= 30";
        passwordLengthEl.classList.add("error");
    } else {
        passwordLengthEl.classList.remove("error")
        generatedPasswordField.innerText = password
    }  
}

const generateMainArray = () => {
    subpassword = []
    if(upperCaseInput.checked) {
        let randomUpperCase = getUpperCase()
        subpassword.push(randomUpperCase)
    } 
    
    if (lowerCaseInput.checked) {
        let randomLowerCase = getLowerCase()
        subpassword.push(randomLowerCase)
    } 
    
    if(numberInput.checked) {
        let randomNumber = getnumbers()
        subpassword.push(randomNumber)
    } 
    
    if(specialCharInput.checked) {
        let randomSpecialChar = getspecialCharacters()
        subpassword.push(randomSpecialChar)   
    } 

    if(!upperCaseInput.checked && !lowerCaseInput.checked && !numberInput.checked && !specialCharInput.checked) {
        let randomUpperCase = getUpperCase()
        subpassword.push(randomUpperCase)

        let randomLowerCase = getLowerCase()
        subpassword.push(randomLowerCase)

        let randomNumber = getnumbers()
        subpassword.push(randomNumber)

        let randomSpecialChar = getspecialCharacters()
        subpassword.push(randomSpecialChar)  
    }
    
    return subpassword[Math.floor(Math.random() * subpassword.length)]
}

// function strengthMeter() {
//     strengthNumber = 0

//     // Check the count of checboxes
//     checkboxes.forEach(checkbox => {
//         if(checkbox.checked) {
//             strengthNumber++
//         }
//     })

//     if(passwordLength < 5) {
//         strengthNumber--
//     }
//     if(passwordLength > 15) {
//         strengthNumber++
//     }

//     console.log({strengthNumber})
// }