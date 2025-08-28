let x = document.querySelector("#signin2");
let s = document.querySelector("#create");
let y = document.querySelector(".sign");
let z = document.querySelector(".log");

x.onclick = function () {
  z.style.display = "none";
  y.style.display = "block";
};
s.onclick = function () {
  y.style.display = "none";
  z.style.display = "block";
};

const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;

function isValidGmail(email) {
  return gmailRegex.test(email);
}

const emailElement = document.getElementById("email2");
const resultDiv = document.getElementById("result");

emailElement.onkeyup = function () {
  const emailInput = emailElement.value;
  if (isValidGmail(emailInput)) {
    resultDiv.innerHTML = `<span style="color: green;">✓ Valid Gmail address!</span>`;
    resultDiv.style.display = "block";
  } else {
    resultDiv.innerHTML = `<span style="color: red;"> Invalid Gmail address. Please enter a valid Gmail</span>`;
    resultDiv.style.display = "block";
  }
};

const pass = document.querySelector("#Password2");
const passc = document.querySelector("#Password3");

const re = document.querySelector(".conform");
function CheckPasswords() {
  if (pass.value == passc.value) {
    re.innerHTML = `<span style="color: green;"> the passwords accepted </span>`;
  } else {
    re.innerHTML = `<span style="color: red;"> Invalid repeat password</span>`;
  }
}

pass.onkeyup = CheckPasswords;
passc.onkeyup = CheckPasswords;

const log = document.querySelector(".logIn");
log.onclick = function () {
  if (pass.value == passc.value && isValidGmail(emailElement.value)) {
    window.alert("account created successfully");
    z.style.display = "none";
    y.style.display = "block";
    let js = `{
      "account${emailElement.value}" :{
        "user": "${emailElement.value}",
        "password": "${[pass.value]}",
        "id": []
      }
        }
    `;
    localStorage.setItem(`account${emailElement.value}`, JSON.stringify(js));
  } else {
    window.alert("write a vaild email and password");
  }
};

let Si = document.querySelector("#signin");
const emailC = document.getElementById("email");
const passwordCh = document.getElementById("Password");
Si.onclick = function(){
  if(
    JSON.parse(JSON.parse(localStorage.getItem("account" + emailC.value))) !=
      null &&
    JSON.parse(JSON.parse(localStorage.getItem("account" + emailC.value)))[
      "account" + emailC.value
    ]["password"] == passwordCh.value
  ){
    window.alert("signed successfully");
    localStorage.setItem("Signed","account" + emailC.value);
  } else {
    window.alert("write a vaild account");
  }
};
