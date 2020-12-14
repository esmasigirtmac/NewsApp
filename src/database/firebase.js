import * as firebase from 'firebase';

const firebaseConfig = {
            apiKey: "AIzaSyBYyt7EEIEHSlq01f8GyrtY8aGEW9bao1s",
            authDomain: "mobil-12605.firebaseapp.com",
            databaseURL: "https://mobil-12605.firebaseio.com/",
            projectId: "mobil-12605",
            storageBucket: "mobil-12605.appspot.com",
            messagingSenderId: "539839618218",
            appId: "1:539839618218:web:bbb6baa5b1744a3ecb84d3"
};

firebase.initializeApp(firebaseConfig);

export default firebase;