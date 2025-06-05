const Login = localStorage.getItem('Login');

if (!Login) {
    document.getElementById('Login').innerHTML = 'Sigmentium';
    document.getElementById('Login2').innerHTML = 'Sigmentium';
}
else {
    document.getElementById('Login').innerHTML = Login;
    document.getElementById('Login2').innerHTML = Login;
}

function Fall() {
    alert('Временно недоступно');
}