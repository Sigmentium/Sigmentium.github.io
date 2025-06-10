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

Notification.requestPermission().then(function(permission) {
    if (permission === "granted") {
        console.log("Разрешение на уведомления получено!");
    } else {
        console.log("Разрешение на уведомления отклонено.");
    }
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        alert(`Service Worker зарегистрирован с помощью: ${registration}`);
    }).catch(function(error) {
        alert(`Ошибка регистрации Service Worker: ${error}`);
    });
}