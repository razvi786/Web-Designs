const apiURL =
  "https://sheets-to-database-f766a.firebaseio.com/1qkTaetLyFTRjbqHUNJ6aJ5Iq2Qem-0DzbVwf6kWo2yw/sheet1";

// async function getImages() {
//   let fetchAPI = await fetch(apiURL);
//   let images = await fetchAPI.json();
//   console.log(images);
// }

// getImages();

// var userId = firebase.auth().currentUser.uid;

// // Option 1: Access Firebase services via the defaultProject variable
// var defaultStorage = defaultProject.storage();
// var defaultFirestore = defaultProject.firestore();

// Option 2: Access Firebase services using shorthand notation
// const defaultStorage = firebase.storage();
const defaultFirestore = firebase.firestore();

// console.log("defaultStorage", defaultStorage);
console.log("defaultFirestore", defaultFirestore);
console.log(firebase);
