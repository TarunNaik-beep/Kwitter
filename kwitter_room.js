
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDi59Dyrp9qhbbIsy-PNJspDJulYE5S00A",
      authDomain: "kwitter-2e3e9.firebaseapp.com",
      databaseURL: "https://kwitter-2e3e9-default-rtdb.firebaseio.com",
      projectId: "kwitter-2e3e9",
      storageBucket: "kwitter-2e3e9.appspot.com",
      messagingSenderId: "537683538412",
      appId: "1:537683538412:web:2e9bca1238c903674c10c9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerText = "Welcome" + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name" + Room_names );
      row = "<div class='room_name' id="+Room_names + " onlick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row ;

      //End code
});});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
