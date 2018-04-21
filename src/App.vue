<template>
  <div id="app" class="container">
   <div class="page-header">
   <h1> Book Management system made in Vue.JS and Firebase</h1>

   </div>
   <div class="panel panel-default">
   <div class="panel-heading">
   <h3> Books Lists</h3>

   </div>
   <div class="panel-body">
   <table class="table table-striped">
    <thead>
      <tr>
        <th>
          Title
        </th>
        <th>
          Author
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in books">
        <td>
         <a v-bind:href="book.url"> {{book.title}}</a>
        </td>
        <td>
          {{book.author}}
        </td>
      </tr>
    </tbody>
   </table>
   </div>
  </div>
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

let booksRef=db.ref('books');


export default {
  name: 'App',
  firebase:{
  books: booksRef
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
