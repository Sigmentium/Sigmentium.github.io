// Запрос разрешения и подписка на пуши
async function subscribeForPush() {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      alert('Пуш-уведомления не разрешены');
      return;
    }

    if (!('serviceWorker' in navigator)) {
      alert('Service Worker не поддерживается');
      return;
    }

    const registration = await navigator.serviceWorker.register('/service-worker.js');
    console.log('Service Worker зарегистрирован');

    // Твой публичный ключ из бэкенда
    const publicKey = 'BJ63rhkNrb3VMwUlRD2E6Mo395dBVxOmTO_i9zCvabD6mMWmJJNeFN41t9i5jMzluWAhVZM5ViQ5jB_ltk46cg4';

    // Конвертация ключа
    function urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
      const rawData = window.atob(base64);
      return Uint8Array.from([...rawData].map(c => c.charCodeAt(0)));
    }

    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicKey)
    });

    // Отправляем подписку на сервер
    await fetch('https://pushsigmentium.onrender.com/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(subscription)
    });

    alert('Вы подписаны на пуш-уведомления!');

  } catch (e) {
    console.error('Ошибка подписки:', e);
  }
}

// Можно подписывать пользователя по кнопке, например:
document.getElementById('subscribeBtn').onclick = subscribeForPush;