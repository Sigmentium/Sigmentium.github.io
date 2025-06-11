self.addEventListener('push', (event) => {
  let data = {};

  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data = { title: 'Новое уведомление', message: event.data.text() };
    }
  }

  const title = data.title || 'Новое уведомление';
  const options = {
    body: data.message || 'Текст отсутствует',
    icon: '/Photo/Sigmentium.jpeg',
    badge: '/Photo/Sigmentium.jpeg'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});