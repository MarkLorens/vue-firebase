<template>
  <Navbar />
  <form @submit.prevent="addInput">
    <input type="text" v-model="input">
    <button>Submit</button>
  </form>
  <div class="content" v-for="data in returnedData" :key="data.content">
    {{ data }}
  </div>
</template> 

<script>
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data() {
    return {
      returnedData: [],
      input: '',
      name: '',
      isUser: false
    }
  },
  mounted() {
    this.name = localStorage.getItem('userName')

    var dataListen = firebase.database().ref('UserInput')
    dataListen.on('value', (snapshot) => {
      const res = snapshot.val();
      for(var key of Object.keys(res)){
        if(res[key].userName == this.name){
          this.returnedData.push(res[key])
        }
      }
    })
  },
  methods: {
    addInput() {
      // Payload
      var time = new Date().toLocaleString()

      var postData = {
        content: this.input,
        entryTime: time,
        userName: this.name
      }

      // Get firebase new key
      var newKey = firebase.database().ref().child('UserInput').push().key

      // Update
      var updates = {}
      updates['/UserInput/' + newKey] = postData
      this.input = ''
      this.returnedData = []

      return firebase.database().ref().update(updates)
    }
  }
}
</script>

<style scoped>
input {
  border: 1px solid black;
  size: 5px;
}
</style>