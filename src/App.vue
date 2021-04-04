<template>
  <router-view/>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  beforeMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(!user) {
        this.$router.replace('/login')
      }
      else if (this.$route.path == '/login' || this.$route.path == '/register') {
        this.$router.replace('/')
      }
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: #eee;
  margin: 0;
  padding: 0;
}
</style>
