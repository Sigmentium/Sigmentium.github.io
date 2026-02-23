self.addEventListener('push', (event) => {
    let data = {};

    if (event.data) {
        data = event.data.json();
    }
  
    const title = data.title;
    const options = {
        body: data.body,
        icon: '/Photo/Sigmentium.jpeg',
        data: {
            url: '/'
        }
    };
  
    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
  
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then((clientList) => {
            for (const client of clientList) {
                if (client.url === event.notification.data.url && 'focus' in client) {
                    return client.focus();
                }
            }

            if (clients.openWindow) {
                return clients.openWindow(event.notification.data.url);
            }
        })
    );
});