<template>
    <ul>
        <li><a href="#">Home?</a></li>
        <li><a href="#">Somewhere maybe</a></li>
        <li style="float:right"><a @click="Logout">Logout</a></li>
    </ul>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    methods: {
        Logout(){
        firebase.auth().signOut()
            .then(alert('Signed Out'))
            .catch(err => console.log(err.message))
        }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(44, 41, 219);
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
  cursor: pointer;
}
</style>