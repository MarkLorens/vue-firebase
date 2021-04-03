<template>
  <div class="home">
    Home
  </div>
  <button @click="Logout">Logout</button>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Home',
  methods: {
    Logout(){
      firebase.auth().signOut()
        .then(alert('Signed Out'))
        .catch(err => console.log(err.message))
    }
  }
}
</script>
