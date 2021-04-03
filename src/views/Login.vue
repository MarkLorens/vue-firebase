<template>
    <form @submit.prevent="Login">
        <label>Email: </label>
        <input type="email" required v-model="email">
        <label>Password: </label>
        <input type="password" required v-model="password" autocomplete="off">
        <button> Login </button>
    </form>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    data() {
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        Login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(data => console.log(data))
                .catch(err => console.log(err.message))
            
            this.email = ''
            this.password = ''
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
        border-bottom: 1px solid #ddd;
        color: #555;
    }
button {
        background: #0b5dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 5px;
    }
</style>