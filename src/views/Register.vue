<template>
    <div class="backdrop">
        <form @submit.prevent="Register" class="modal">
            Sign up here
            <hr class="register-header">
            <label>Email: </label>
            <input type="email" v-model="email" required>
            <label>Password: </label>
            <input type="password" v-model="password" required>
            <br>
            <button> Register </button>
            <hr>
            <button type="button" class="button" @click="stopRegister">Already have an account?</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        stopRegister() {
            this.$emit('close')
        },
        Register() {
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                .then((user) => {
                    localStorage.setItem('userName', user.user.email)
                })
                .then(alert("User " + this.email + " was created"))
                .catch(err => console.log(err.message))
        }
    }
}
</script>

<style>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop {
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
.register-header{
    width: 100%;
    border: 1px solid #0b5dff;
}
</style>