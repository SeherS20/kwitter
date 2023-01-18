
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC-vKSvi0nMHVRJwilKj4XSJkx-MrSTsd0",
      authDomain: "kwitter-70856.firebaseapp.com",
      databaseURL: "https://kwitter-70856-default-rtdb.firebaseio.com",
      projectId: "kwitter-70856",
      storageBucket: "kwitter-70856.appspot.com",
      messagingSenderId: "778766478868",
      appId: "1:778766478868:web:4d7427b69db35cf4510101",
      measurementId: "G-N798M12PD3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
      firebase.database().ref("/").child(room_name).update ({
            purpose : "Adding room name"
      })
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_names")
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}

function Logout() {
      window.location = "index.html"
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
}