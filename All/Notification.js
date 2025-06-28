const key = 'BNF-DmJZNsPrXxAGXZrGa1F6T5JrV7p2kfplRJ79AUv484B_szzLnvORiMhd7SBz62KK00JtIMgIX4xGcSWh6X4';

function ParseKey(key) {
    const padding = '='.repeat((4 - key.length % 4) % 4);
    const base64 = (key + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = atob(base64);
    return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)));
}

document.getElementById('Subscribe').addEventListener('click', () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.register('../service-worker.js')
            .then(registration => {
                return Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        alert('Вы подписаны на уведомления!');

                        return registration.pushManager.subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: ParseKey(key)
                        });
                    }
                    else {
                        alert('Запрос отклонён');
                    }
                });
            })
            .then(subscription => {
                return fetch('https://back-push.onrender.com/subscribe', {
                    method:'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(subscription)
                });
            })
            .catch(() => {
                alert('Неизвестная ошибка');
            });
    }
    else {
        alert('Уведомления в этом браузере не поддерживаются');
    }
});