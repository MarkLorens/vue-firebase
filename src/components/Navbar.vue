<template>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Me</a></li>
        <li class="dropdown" style="float:right">
          <a href="javascript:void(0)" class="dropbtn">{{ user }} <i class="arrow down"></i> </a>
          <div class="dropdown-content">
            <a @click="Logout">Logout</a>
          </div>
      </li>
    </ul>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {
      user: localStorage.getItem('userName')
    }
  },
  methods: {
    Logout(){
      firebase.auth().signOut()
        .then(alert('Signed Out'))
        .catch(err => console.log(err.message))
        
      localStorage.removeItem('userName')
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
li a{
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover {
  background-color: #111;
  cursor: pointer;
}
li.dropdown {
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background: #eee;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  color: #111;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover{
  background: #111;
  color: white;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.arrow {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin: 2px;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>