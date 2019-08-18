
/* var app = document.getElementById('root')

var dbRef = firebase.database()

var messageRef = dbRef.ref('message')

messageRef.once('value').then(function(snap){

  app.innerText = snap.val()

});
*/


/*
const createPost = () =>{ //funciona pero se duplican los post por user

     let db = firebase.firestore();
     let user = firebase.auth().currentUser;
     var userSignIn = user.uid;
     var msj = document.getElementById("posts").value;
     //let data = []
     //not working with currentUser... trying with frog observer!
     //firebase.auth().onAuthStateChanged(user=> {
         db.collection("users").doc(userSignIn).get().then(doc=> {
             db.collection("post").add({

             userSignIn,
              msj,

             }).then(docRef => {
                 console.log("Document written with ID: ", docRef.id);
             });
             console.log(`${doc.id} => ${doc.data()}`);
             //showPost()
         });
}



<input type="image" style="width:5rem;height: 5rem;" src="gmal.png" name="" value="" id= "usericon">
<input type="image" src="facebook.png" style="width:4rem;height: 4rem;" name="" value="">




*/









//respaldo html

/*

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>EducationApp</title>
    <link rel="stylesheet" href="style.css">
     <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet">
     <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
  </head>
  <body>

    <div class="grid">



<div class="container" id= first style="">
      <img src="edu.gif" style="width:10rem;height: 10rem;" alt="">
        <h1>EducationApp</h1>
        <form>
          <input type="text" class="bttn" placeholder="Ingresa Correo" id = "email" value= "">
          <br>
          <input class="bttn"  placeholder="Ingresa Contraseña" type="password" id= "password" value= "">
          <br>
          <button type="button" class= "bttnlog" id= "register" name="button">Registrar</button>
          <br>
          <button type="button" onclick=toggleSignIn() class= "bttnlog" id= "register" name="button">Ingresar</button>
          <br>
          <p>O ingresa con</p>
          <button type="button" class= "bttnlogProvider" id= "usericon" name="button"><img src="gmal.png" style="width:3rem;height: 3rem;"/></button>
          <button type="button" class="bttnlogProvider" onclick="LoginFB()" id= "fbicon" name="button"><img src="facebook.png" style="width:2.5rem;height: 2.5rem;"/></button>
          </form>
    </div>



<div class="container" id="registerForm">
       <img src="edu.gif" style="width:10rem;height: 10rem;" alt="">
       <h1>EducationApp</h1>
       <form>
         <input type="text" class="bttn" placeholder="Nombre" id = "nombre">
         <br>
         <input type="text" class="bttn" placeholder="Correo Electrónico" id = "mailRegister">
         <br>
         <input type="password" class="bttn" placeholder="Contraseña" id = "passwordRegister">
         <br>
         <input type="password" class="bttn" placeholder="Confirmar Contraseña" id = "passwordConfirm">
         <br>
         <button type="button" class="bttnlog" id="register2" name="button">REGISTRAR</button>
       </form>
   </div>



  <div class="container" id= "newsfeed">
      <h1>EducationApp</h1>  <input class="exit" type="button" id= "exit" name="" value="Salir">

        <h2 id= "nameUser" ></h2>

        <form>
          <textarea class="NewPost" id="posts" cols="40" rows="5">¿Que quieres publicar hoy?</textarea>
          <br>
          <button type="button" class="buttonsNewPost" id="post" name="button">Publicar</button>
          <br>
       </form>
       <div class="" id= "postCreate">

       </div>


</div>

    </div>

    <script defer src="https://www.gstatic.com/firebasejs/5.10.1/firebase-app.js"></script>
    <script defer src="https://www.gstatic.com/firebasejs/5.10.1/firebase-auth.js"></script>
    <script defer src="https://www.gstatic.com/firebasejs/5.10.1/firebase-database.js"></script>
    <script defer src="https://www.gstatic.com/firebasejs/5.10.1/firebase-firestore.js"></script>
    <script src="https://apis.google.com/js/platform.js" async defer></script>

    <script defer src="./init-firebase.js"></script>
    <script defer src= "./auth.js"></script>
    <script type="module" src="app.js"></script>
    <script scr= "main.js"> </script>
  </body>
</html>








*/
  