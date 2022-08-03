import { createApp } from 'vue'
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import App from './App.vue'
import '@fortawesome/fontawesome-free/js/all'


const firebaseConfig = {
    apiKey: "AIzaSyA73eGWSZNuK5-3hpwplqxOWjwbtP4ILIc",
    authDomain: "meiko-ac00c.firebaseapp.com",
    projectId: "meiko-ac00c",
    storageBucket: "meiko-ac00c.appspot.com",
    messagingSenderId: "1045325968575",
    appId: "1:1045325968575:web:3ea15538eac7c60314420a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()

createApp(App).mount('#app')
