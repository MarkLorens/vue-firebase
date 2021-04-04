<template>
    <button @click="Logout">Logout</button>
    <div class="home">
      Home
    </div>
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
