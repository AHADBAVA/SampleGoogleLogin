
const firebaseConfig = {
    apiKey: 'AIzaSyCfOeLIQ4JUQ1xmhMdqLmVbMh1hMs2P46M',
    authDomain: 'fir-99a3c.firebaseapp.com',
    projectId: 'fir-99a3c',
    storageBucket: 'fir-99a3c.appspot.com',
    messagingSenderId: '273750784881',
    appId: '1:273750784881:web:597f73df346105a65e14d0',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

var userImg = document.getElementById('user-img');
var userName = document.getElementById('user-name');

function Login(){
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(function (result) {
            var user = result.user;
            console.log('User logged in:', user);
            window.location = 'welcome.html';
        })
        .catch(function (error) {
            console.error('Login error:', error);
        });
}

function logoutBtn() {
    auth.signOut()
        .then(function () {
            console.log('User signed out');
            window.location = 'index.html';
        })
        .catch(function (error) {
            console.error('Logout error:', error);
        });
}

auth.onAuthStateChanged(function (user) {
    if (user) {
        userImg.src = user.photoURL; // Set user profile picture
        userName.textContent = user.displayName;
    } else {
        // No user is signed in
        loginPage.style.display = 'block';
        homePage.style.display = 'none';
    }
});
