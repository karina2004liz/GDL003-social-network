// Se inicia firebase de manera automatica al abrir la página, se ligó a html de esa manera
const firebaseConfig = {
apiKey: "AIzaSyA9wCD5xbxsY4EFt3rgDWZtEMfIasDEsok",
authDomain: "educationapp-2ddc2.firebaseapp.com",
databaseURL: "https://educationapp-2ddc2.firebaseio.com",
projectId: "educationapp-2ddc2",
storageBucket: "educationapp-2ddc2.appspot.com",
messagingSenderId: "309772059220",
appId: "1:309772059220:web:7a06fbecf6e36735"
// ...
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




/*
const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

function createDiv(doc){

let espacio = document.createElement('div');
let name = document.createElement('h1');

name.textContent = doc.data().Name;

}

db.collection('Users').get().then((snapshot)=>{

snapshot.docs.forEach(doc =>{
createDiv(doc);

})

})


rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
match /{allPaths=**} {
allow read, write;
}
}
}



rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
match /{document=**} {
allow read, write;
}
}
}



*/

