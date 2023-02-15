`use strict`;
// Array for all students
const allStudents = [];

// Student objects
const Student = {
  firstName: "",
  lastName: "",
  middleName: "",
  nickName: "",
  gender: "",
  imgSrc: "",
  house: "",
};
// JSON url
const urlStudentList = "https://petlatkea.dk/2021/hogwarts/students.json";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  loadJSON();
}

// Fetching JSON fil med studenter
async function loadJSON() {
  console.log("loadJSON");
  const jsonData = await fetch(urlStudentList);
  studentData = await jsonData.json();
  console.table(studentData);
  opretStudenter();
}
// Opret studenter
function opretStudenter() {
  console.log("opretStudenter");
  studentData.forEach((elm) => {
    const student = Object.create(Student);

    // Variabler
    let fullName = elm.fullname.trim();
    let house = elm.house.trim();
    let gender = elm.gender.trim();

    // Giver de forskellige opjekter en værdi
    // Firstname: Første bogstav i fornavnet sættes til upper case og resten til lower case.
    student.firstName = fullName.substring(0, 1).toUpperCase() + fullName.substring(1, fullName.indexOf(" ")).toLowerCase();

    // Lastname: Første bogstav i efternavnet sættes til upper case og resten til lower case.
    student.lastName = fullName.substring(fullName.lastIndexOf(" ") + 1, fullName.lastIndexOf(" ") + 2).toUpperCase() + fullName.substring(fullName.lastIndexOf(" ") + 2).toLowerCase();

    // Middlename: Første bogstav i mellemnavnet sættes til upper case og resten til lower case.
    student.middleName = fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" ")).trim().substring(0, 1).toUpperCase() + fullName.substring(fullName.indexOf(" "), fullName.lastIndexOf(" ")).trim().substring(1).toLowerCase();
  
/* Table */
function showAllStudents() {
  console.table(allStudents);
}
