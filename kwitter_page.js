//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name")

function Send(){
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      })
      document.getElementById("msg").value = ""
    }

function Logout(){
      window.location = "index.html"
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id)
      console.log(message_data)
      name = message_data['name']
      message = message_data['message']
      like = message_data['like']
      name_with_tag = "<h4>"+name+ " <img class='user_tick' src = 'tick.png'></h4>"
      message_with_tag = "<h4 class = 'message_h4' >"+message+"</h4>"
      like_button = "<button class= 'btn btn-warning' id="+firebase_message_id+" value ="+like+" onclick = 'updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Likes:"+like+"</span> </button> <hr>"

      row = name_with_tag+message_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("clicked on like button-" +message_id)
      button_id= message_id;
      likes = document.getElementById(button_id).value;
      updated_likes= Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      })

}
