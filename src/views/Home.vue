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
    <div class="content" v-if="temp">
      <table>
        <tr>
          <th>Input</th>
          <th>Time</th>
        </tr>
        <tr v-for="data in returnedData" :key="data">
          <td>{{ data.content }}</td>
          <td>{{ data.entryTime }} </td>
          <td class="action" @click="Delete(data.content)">X</td>
        </tr>
      </table>
      <button class="Add" @click="startAdding">Add More</button>
    </div>
    <div v-else>
      <p>Loading data...</p>
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
      adding: false,
      temp: null
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.name = localStorage.getItem('userName')

      var dataListen = firebase.database().ref('UserInput')
      dataListen.on('value', (snapshot) => {
        const res = snapshot.val();
        this.temp = res
        for(var key of Object.keys(res)){
          if(res[key].userName == this.name){
            this.returnedData.push(res[key])
          }
        }
      })
    },
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

      firebase.database().ref().update(updates)
      this.adding = false
    },
    startAdding() {
      this.adding=true
    },
    Delete(content) {
      // Get clicked index
      var index = this.returnedData.map(function(e) {
        return e.content
      }).indexOf(content)
      //Get Key
      var key = Object.keys(this.temp)[index];
      // Delete
      this.returnedData = []
      return firebase.database().ref().child('UserInput/' + key).remove()
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
  border: 1px solid #eee;
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
  background: white;
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
tr{
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
.action {
  background-color: #eee;
  color: black;
}
.action:hover {
  cursor: pointer;
  color: crimson;
}
</style>