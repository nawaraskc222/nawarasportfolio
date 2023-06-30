

var firebaseConfig = {
  apiKey: "AIzaSyBOzQ7HcuGTWZ9cBpQk0-JoVBOn1inYI7s",
  authDomain: "nawarasportfolio-bf4aa.firebaseapp.com",
  projectId: "nawarasportfolio-bf4aa",
  storageBucket: "nawarasportfolio-bf4aa.appspot.com",
  messagingSenderId: "772635365027",
  appId: "1:772635365027:web:6da27f7ef6fad33ffd3916"
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
