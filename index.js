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

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        alert(`Service Worker зарегистрирован с помощью: ${registration}`);
    }).catch(function(error) {
        alert(`Ошибка регистрации Service Worker: ${error}`);
    });
}