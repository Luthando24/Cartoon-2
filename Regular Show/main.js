// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDegUgeXuc7eYJsdXBdUQGXSax-OTi3mdU",
    authDomain: "cartoon-site.firebaseapp.com",
    projectId: "cartoon-site",
    storageBucket: "cartoon-site.appspot.com",
    messagingSenderId: "298122957841",
    appId: "1:298122957841:web:fd1b421a1e4485c9f04db0",
    measurementId: "G-3N2RCJ5ZCV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//Refrence contactInfo Collections
let contactInfo = firebase.database().ref("User");


//listen for form submit
document.getElementById("Contact").addEventListener("button",button);


function submit(e){
  console.log("Luthando");
  e.preventDefault();

  
//Get input values
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let subject = document.getElementById("subject").value;
let message = document.getElementById("message").value;


saveContactInfo(name,email,subject,message);

console.log(name,email,subject,message);



}

//Save infos to fireBase
function saveContactInfo(name,email,subject,message){
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    User_name: name,
    User_email: email,
    User_subject: subject,
    User_message:message,

  });
}
 