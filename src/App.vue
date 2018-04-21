<template>
  <div id="app" class="container">
   
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Firebase from 'firebase'
let config={
    apiKey: "AIzaSyA7wPioOJ2oFLu31yv9m0KV04MLDJbbae0",
    authDomain: "bookmanagement-8f49e.firebaseapp.com",
    databaseURL: "https://bookmanagement-8f49e.firebaseio.com",
    projectId: "bookmanagement-8f49e",
    storageBucket: "",
    messagingSenderId: "135004945659"
}
let app=Firebase.initializeApp(config);
let db=app.database();

let bookRef=db.ref('books');


export default {
  name: 'App',
  firebase:{
  books: booRef
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
