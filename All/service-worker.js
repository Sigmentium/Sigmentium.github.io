self.addEventListener('push', (event) => {
    let options = {
        body: event.data.text(),
        icon: '/Photo/Sigmentium.jpeg',
        badge: '/badge.png'
    };

    event.waitUntil(
        self.registration.showNotification('Новое уведомление!', options)
    );
});