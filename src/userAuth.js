// DOM ELEMENTS FIRST PAGE
const uEmail = document.getElementById("email");
const uPass = document.getElementById("password");
const btnRegister = document.getElementById("register");
const btnSignIn = document.getElementById("ingresar");
const btnGoogle = document.getElementById("usericon");
const btnFb = document.getElementById("fbicon");
//DOM ELEMENTS SECONDT PAGE
const cUserName = document.getElementById("nombre");
const cUserEmail = document.getElementById("mailRegister");
const cUserPass = document.getElementById("passwordRegister");
const cUserPassConfirm = document.getElementById("passwordConfirm");
const btnRegisterCreateUser = document.getElementById("register2");
//DOM ELEMENTS THIRD PAGE
const showNameUser = document.getElementById("nameUser");
const btnHome = document.getElementById("home");
const btnLogOut = document.getElementById("exit");
const txtcreatePost = document.getElementById("posts");
const btncreatePost = document.getElementById("post");
const btnDeletePost = document.getElementById("delete");
const btnEditPost = document.getElementById("edit");
const txtPostCreated = document.getElementById("postCreate");
//DOM ELEMENTS FOUR PAGE




//DOM PAGES
document.getElementById('first').style.display='block';
document.getElementById('registerForm').style.display='none';
document.getElementById('newsfeed').style.display='none';
document.getElementById('allPost').style.display = 'none';

//CONST TO GET DATA FIREBASE
const postKeyValue = "";
const userUid = "";
const currentUser = "";
const currentUserEmail = "";


//FUNCTIONS FIREBASE AUTH


// CREATE USER EMAIL AND PASSWORD

const createNewUserEmailPass = (email,password)=>{

    firebase.auth().createUserWithEmailAndPassword(email, password).
    then(function (user){

        let email = cUserEmail.value;
        let name = cUserName.value;
        let uid = firebase.auth().currentUser.uid;

        console.log('¡Creamos al usuario!');
        console.log(user);

        document.getElementById('first').style.display='none';
        document.getElementById('registerForm').style.display='none';
        document.getElementById('newsfeed').style.display='block';
        document.getElementById('allPost').style.display = 'none';
        
        //INGRESAR AQUÍ NOMBRE DE USUARIO

        showNameUser.innerHTML = 'Bienvenido ' + `<br>` + name;

        writeUserData(uid,name,email)
        


    }).catch(function(error){

        let errorCode = error.code;
        let errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert(errorMessage);
        } else {
          alert(errorMessage);
        }
        console.log(error);

    })

}

//LOGIN WITH GOOGLE

const logInGoogle = ()=>{

    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');

    firebase.auth().signInWithPopup(provider).then(function(result){

        let token = result.credential.accessToken;
        let user = result.user;
        let name = result.user.displayName;
        let email = result.user.email;
        let uid = result.user.uid;

        console.log('Ingreso con Google exitoso');

        
        document.getElementById('first').style.display='none';
        document.getElementById('registerForm').style.display='none';
        document.getElementById('newsfeed').style.display='block';
        document.getElementById('allPost').style.display = 'none';

        showNameUser.innerHTML = 'Bienvenido ' + `<br>` + name;


        writeUserData(uid,name,email);


    }).catch(function(error){

        let errorCode = error.code;
        let errorMessage = error.message;
        let erroremail = error.email;
        let credential = error.credential;
 
        if (errorCode === 'auth/account-exists-with-different-credential'){
 
          alert('Usuario ya registrado');
        }


    })


}


const logInFacebook = () =>{

    let provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope("public_profile");

    firebase.auth().signInWithPopup(provider).then(function(result){

        let token = result.credential.accessToken;
        let user = result.user;
        let name = result.user.displayName;
        let email = result.user.email;
        let uid = result.user.uid;

        console.log('Ingreso con Facebook exitoso');

        
        document.getElementById('first').style.display='none';
        document.getElementById('registerForm').style.display='none';
        document.getElementById('newsfeed').style.display='block';
        document.getElementById('allPost').style.display = 'none';

        showNameUser.innerHTML = 'Bienvenido ' + `<br>` + name;

        writeUserData(uid,name,email);

    }).catch(function(error){

        let errorCode = error.code;
        let errorMessage = error.message;
        let erroremail = error.email;
        let credential = error.credential;
 
        if (errorCode === 'auth/account-exists-with-different-credential'){
 
          alert('Usuario ya registrado');
        }

    })
    
}



const signIn = (email,password)=>{

    if (firebase.auth().currentUser) {
        // [START signout] VALUDA QUE HAYA UN USUARIO LOGUEADO
        firebase.auth().signOut();
        // [END signout]
      } else { //VALIDA QUE LOS CAMPOS NO ESTÉN VACIOS
 
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user){

            alert("Credenciales correctas, Bienvenido");

            let currentUser = firebase.auth().currentUser.uid;
            
            showNameSignIn(currentUser);
            

            console.log(name);

            if (currentUser != null){

                document.getElementById('first').style.display='none';
                document.getElementById('registerForm').style.display='none';
                document.getElementById('newsfeed').style.display='block';
                document.getElementById('allPost').style.display = 'none';

                

            }

        }).catch(function(error){
         // Handle Errors here.
         let errorCode = error.code;
         let errorMessage = error.message;
         // [START_EXCLUDE]
         if (errorCode === 'auth/wrong-password') {
           alert('Wrong password.');
         } else {
           alert(errorMessage);
         }
         console.log(error);

        })

    }
}




//FUNCTION FIREBASE SAVEUSERS

const writeUserData =(userUid,name,email)=>{

  firebase.database().ref('user/' + userUid).set({
   
    username: name,
    email: email,
    
  }).then(function() {
    console.log('dato almacenado correctamente');
})
.catch(function(error) {
    console.log('detectado un error', error);
});


}




//FUNCTION FIREBASE POST

const writeNewPost = (uid,email,post)=>{

  let postData = {
    author: email,
    uid: uid,
    body: post,
    starCount: 0,
  
  };

  // Get a key for a new Post.
  let newPostKey = firebase.database().ref().child('posts').push().key;
  console.log("Document key:" + newPostKey );

  //Write the new post's data simultaneously in the posts list and the user's post list.
  let updates = {};
  updates['/posts/' + newPostKey] = postData;

  showPostElement(newPostKey);


  return firebase.database().ref().update(updates);

}





//CREATE DIV CONTAINER TO POSTS


const showNameSignIn = (uid)=>{


  let nameUser = firebase.database().ref('user/' + uid);
  nameUser.child('username').on("value", function(snapshot){

    showNameUser.innerHTML = 'Bienvenido ' + `<br>` + snapshot.val();

  })


}



const showPostElement = (key)=>{
  
let postKey = key;

console.log("esta es la key guardada en una variable" + postKey);

let uid = firebase.auth().currentUser.uid;

let all = firebase.database().ref('posts' + postKey + uid);



let showPost = firebase.database().ref('posts/' + postKey);
showPost.child('body').on("value", function (snapshot){


let html =  txtPostCreated.innerHTML =

`

<form class="${postKey}" id= "postImpreso">
  <fieldset>
    <legend>Post:</legend>
    <h2 id= "nameUser" > ${snapshot.val()}</h2>
    <button type="button" class="buttonsNewPost" id="delete" name="button">Borrar</button>
    <button type="button" class="buttonsNewPost" id="edit" name="button">Editar</button>
  </fieldset>
</form>

`
const btnDeletePost = document.getElementById("delete");
const btnEditPost = document.getElementById("edit");

 
  btnDeletePost.addEventListener("click", ()=>{

    
    deletePost(postKey);
    html.remove();

  });

  
  btnEditPost.addEventListener("click", ()=>{

    editPostElement(postKey);

  })


})


}


const deletePost = (key)=>{

  let deleteCreatePost = firebase.database().ref('posts/' + key);
  deleteCreatePost.remove();
  

}



const editPostElement = (key)=>{

  let editthePost = firebase.database().ref('posts/' + key);
let post = txtcreatePost.value;

  let postData = {
    body: post,
  };

  editthePost.update(postData);


}



const showAllPostHome = () =>{

let allPosts = firebase.database().ref('posts');
allPosts.once("value", function (snapshot){

snapshot.forEach(function (show) {

  let key = show.key;
  let body = show.val().body;

  let html =  txtPostCreated.innerHTML =

  `
  
  <form class="${key}" id= "postImpreso">
    <fieldset>
      <legend>Post:</legend>
      <h2 id= "nameUser" > ${body}</h2>
      <button type="button" class="buttonsNewPost" id="delete" name="button">Borrar</button>
      <button type="button" class="buttonsNewPost" id="edit" name="button">Editar</button>
    </fieldset>
  </form>
  
  `
  const btnDeletePost = document.getElementById("delete");
  const btnEditPost = document.getElementById("edit");
  
   
    btnDeletePost.addEventListener("click", ()=>{
  
      
      deletePost(postKey);
      html.remove();
  
    });
  
    
    btnEditPost.addEventListener("click", ()=>{
  
      editPostElement(postKey);
  
    })




} )

} )


}


//ONCLICK BUTTONS

btnRegister.addEventListener("click", ()=>{ //SHOW REGISTER PAGE

    document.getElementById('first').style.display='none';
    document.getElementById('registerForm').style.display='block';
    document.getElementById('newsfeed').style.display='none';
    document.getElementById('allPost').style.display = 'none';
   

});

btnSignIn.addEventListener("click", ()=>{

    let email = uEmail.value;
    let pass = uPass.value;

    signIn(email,pass);

});

btnGoogle.addEventListener("click", ()=>{

logInGoogle();

});

btnFb.addEventListener("click", ()=>{

logInFacebook();

});

btnRegisterCreateUser.addEventListener("click", ()=>{

    let email = cUserEmail.value;
    let pass = cUserPass.value;
    
    createNewUserEmailPass(email,pass);
     


});

btnLogOut.addEventListener("click", ()=>{

    document.getElementById('first').style.display='block';
    document.getElementById('registerForm').style.display='none';
    document.getElementById('newsfeed').style.display='none'; 
    document.getElementById('allPost').style.display = 'none';

});

btncreatePost.addEventListener("click", ()=>{

let currentUser = firebase.auth().currentUser.uid;
let  currentUserEmail =firebase.auth().currentUser.email;
let  post = txtcreatePost.value;
  
writeNewPost(currentUser,currentUserEmail,post);


});



btnHome.addEventListener("click", () =>{

  document.getElementById('first').style.display='none';
  document.getElementById('registerForm').style.display='none';
  document.getElementById('newsfeed').style.display='none';
  document.getElementById('allPost').style.display = 'block';

  showAllPostHome();


})
