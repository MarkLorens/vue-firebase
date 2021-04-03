import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDcwqm96osZF1y9vfbv_1C_8HwiIxhr5gY",
    authDomain: "fir-tutorial-9588e.firebaseapp.com",
    databaseURL: "https://fir-tutorial-9588e-default-rtdb.firebaseio.com",
    projectId: "fir-tutorial-9588e",
    storageBucket: "fir-tutorial-9588e.appspot.com",
    messagingSenderId: "668451583572",
    appId: "1:668451583572:web:0ad9df1254b31cce625fc1"
  };

firebase.initializeApp(firebaseConfig)
createApp(App).use(router).mount('#app')
