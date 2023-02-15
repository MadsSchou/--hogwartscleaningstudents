`use strict`;
// Array for alle studerende
const alleStuderende = [];

// Student objects
const Studerende = {
  firstName: "",
  lastName: "",
  middleName: "",
  nickName: "",
  gender: "",
  imgSrc: "",
  house: "",
};
// JSON url
const urlStuderendeListe = "https://petlatkea.dk/2021/hogwarts/students.json";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  loadJSON();
}

// Fetching JSON fil med studerende og vis arrayet i en table */

async function loadJSON() {
  console.log("loadJSON");
  const jsonData = await fetch(urlStuderendeListe);
  studerendeData = await jsonData.json();
  console.table(studerendeData);
  opretStuderende();
}
// Opret studerende
function opretStuderende() {
  console.log("opretStuderende");
  studerendeData.forEach((elm) => {
    const studerende = Object.create(Studerende);

    /*Variabler fra arrarayet der skal ændres på*/
    let fullName = elm.fullname.trim();
    let house = elm.house.trim();
    let gender = elm.gender.trim();

    // Giver de forskellige opjekter en værdi
    // Firstname, lastname og middlename: Første bogstav i fornavnet sættes til upper case og resten til lower case.
    studerende.firstName = fullName.substring(0, 1).toUpperCase() + fullName.substring(1, fullName.indexOf(" ")).toLowerCase();

    studerende.lastName = fullName.substring(fullName.lastIndexOf(" ") + 1, fullName.lastIndexOf(" ") + 2).toUpperCase() + fullName.substring(fullName.lastIndexOf(" ") + 2).toLowerCase();

    studerende.middleName = fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" ")).trim().substring(0, 1).toUpperCase() + fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" ")).trim().substring(1).toLowerCase();

    // Nickname: Find nickname med "" ved hjælp af et if statement.
    if (fullName.includes(`"`)) {
      studerende.nickName = fullName.substring(fullName.indexOf(`"`) + 1, fullName.lastIndexOf(`"`));
      studerende.middleName = "";
    }

    // Gender: Første bogstav til gender sættes til upper case og resten til lower case
    studerende.gender = gender.charAt(0).toUpperCase() + gender.substring(1).toLowerCase();

    // Imgsrc: Find destinationen og gør alt til lower case.
    studerende.imgSrc = `./images/${fullName.substring(0, fullName.indexOf(" ")).toLowerCase()}_.png`;
    studerende.imgSrc = `./images/${fullName.substring(fullName.lastIndexOf(" ") + 1, fullName.lastIndexOf(" ") + 2).toLowerCase() + fullName.substring(fullName.lastIndexOf(" ") + 2).toLowerCase()}_${fullName.substring(0, 1).toUpperCase().toLowerCase()}.png`;

    /*House: Første bogstav til gender sættes til upper case og resten til lower case*/
    studerende.house = house.charAt(0).toUpperCase() + house.substring(1).toLowerCase();

    alleStuderende.push(studerende);
  });
  visAlleStuderende();
}

/* Vis arrayet i en table */
function visAlleStuderende() {
  console.table(alleStuderende);
}
