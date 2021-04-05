<template>
    <div class="dropdown">
        <a class="dropbtn"><i class="arrow right" style="float:left" @click="autoFill"></i> </a>
          <div class="dropdown-content">
            <p>Please register a new account or click the arrow button </p>
          </div>
    </div>
    <form @submit.prevent="Login">
        <label>Email: </label>
        <input type="email" required v-model="email">
        <label>Password: </label>
        <input type="password" required v-model="password" autocomplete="off">
        <div class="err">
            {{ msg }}
        </div> 
        <button> Login </button>
        <hr>
        <button type="button" class="button" @click="startRegister">Create new account</button>
    </form>
    <div class="reg" v-if="register">
        <Register @close="startRegister" />
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import Register from './Register.vue'

export default {
    data() {
        return{
            email: '',
            password: '',
            register: false,
            msg: ''
        }
    },
    components: {
        Register
    },
    methods: {
        Login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                    localStorage.setItem('userName', user.user.email)
                })
                .catch(err => this.msg = "Incorrect email or password")
            
            this.email = ''
            this.password = ''
        },
        startRegister() {
            this.register = !this.register
        },
        autoFill() {
            this.email = 'test@test.com'
            this.password = 'password1234'
            console.log('hit');
        }
    }
}
</script>

<style>
form {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
label {
        color: black;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
input{
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid black;
        color: #555;
    }
button {
        background: #0b5dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 5px;
        width: 100%;
    }
hr  {
        margin-top: 15px;
        border: 1px solid rgb(184, 183, 183)
    }
.button {
        margin-top: 10px;
        background: violet ;
    }
.err {
    color: red;
    margin-top: 10px;
    font-weight: bold;
}
.arrow {
  border: solid violet;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;;
}
.arrow:hover {
    cursor: pointer;
}
.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.dropdown-content {
  display: none;
  position: absolute;
  margin-left: 30px;
  background: #0b5dff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content p {
  color: white;
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
.dropdown {
    margin-left: 10px;
}
</style>