

firebase.auth().onAuthStateChanged(function(user) {
    alert("jhjhj");
    if (user) {
        // User is signed in.
        document.getElementById("user_div").style.display="block";
        document.getElementById("login_div").style.display="none";
        
        var user = firebase.auth().currentUser;
        alert(user);
        if(user != null){
            var email_id = user.email;
            alert(email_id);
            document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
            
        }
  
      } else {
        // No user is signed in.
        document.getElementById("user_div").style.display="none";
        document.getElementById("login_div").style.display="block";
  
      }
  });

function login(){
    
    var email=document.getElementById("email_field").value;
    var password=document.getElementById("password_field").value;
    alert(username,password);
    firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : "+ errorMessage);
        // ...
      });


}
function Logout()
{
    firebase.auth().signOut();
}