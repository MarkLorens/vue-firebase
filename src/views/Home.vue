<template>
  <Navbar />
  <template v-if="adding">
    <form @submit.prevent="addInput">
      <label>Your new input</label>
      <input type="text" v-model="input">
      <button class="Add">Submit</button>
    </form>
  </template>
  <template v-else>
    <div class="content">
      <table>
        <tr>
          <th>Input</th>
          <th>Time</th>
        </tr>
        <tr v-for="data in returnedData" :key="data.content">
          <td>{{ data.content }}</td>
          <td>{{ data.entryTime }} </td>
        </tr>
      </table>
      <button class="Add" @click="startAdding">Add More</button>
    </div>
  </template>
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
      adding: false
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
      this.adding = false

      return firebase.database().ref().update(updates)
    },
    startAdding() {
      this.adding=true
    }
  }
}
</script>

<style scoped>
input {
  border-bottom: 1px solid black;
  size: 5px;
}
table, th, td {
  border: 1px solid white;
  border-collapse: collapse;
  padding: 8px;
  margin: 0 auto;
  width: 50%;
  margin-top: 30px;
}
tr:nth-child(even):hover{
  background: black;
  color: white;
}
tr:hover {
  background: #eee;
  color: black;
}
th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #4CAF50;
  color: white;
}
tr:nth-child(even){background-color: #0b5dff; color: white;}
tr {
  background: violet;
  color: white;
}
.content {
  width: 100%;
  height: 100%;
}
.Add {
  width:30%;
  background: #4CAF50;
  font-weight: bold;
  font-size: 1.1em;
}
.Add:hover{
  cursor: pointer;
}
label {
  margin-top: -10px;
  font-size: 1.1em;
  text-transform: none;
}
</style>