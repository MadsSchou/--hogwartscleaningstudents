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

// Fetching JSON file with students
async function loadJSON() {
  console.log("loadJSON");
  const jsonData = await fetch(urlStudentList);
  studentData = await jsonData.json();
  console.table(studentData);
  makeStudents();
}
