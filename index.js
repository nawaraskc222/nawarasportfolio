

var firebaseConfig = {
  apiKey: "AIzaSyDIxfa-0dlonfgAxxMoB5ooxPkTIhsKQis",
  authDomain: "nawarasportfolio.firebaseapp.com",
  projectId: "nawarasportfolio",
  storageBucket: "nawarasportfolio.appspot.com",
  messagingSenderId: "746853139926",
  appId: "1:746853139926:web:c9e835179ae3a25a161077",
  measurementId: "G-2QWFX6MV39"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 var db = firebase.firestore();


async function submit() {
  // console.log("im adding successfully");
const name = document.getElementById("myname").value;
  const email = document.getElementById("myemail").value;
   const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  try {
    await db.collection("nawarasportfolio").add({
      name: name,
      email: email,
      subject:subject,
      message:message,

    });
    console.log("Document written successfully");
    alert("Im glad to serve you!");

     document.getElementById("myname").value="";
   document.getElementById("myemail").value="";
    document.getElementById("subject").value="";
   document.getElementById("message").value="";
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  
}
