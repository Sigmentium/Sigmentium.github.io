const Token = '7809589845:AAGW6NZMiuFRiPYf6A1f8chQR8oLFh_M_RM';
const chatId = '7339807316';
const url = `https://api.telegram.org/bot${Token}/sendMessage`;

let text = `Начало сеанса:\n`;

window.onload = function() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json)
        .then(data => {
            text += data.ip

            fetch(url, {
                method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text
                })
            });
        });
}

document.getElementById('Table').addEventListener('click', function() {
    alert('Временно недоступно');
});

document.getElementById('Invest').addEventListener('click', function() {
    alert('Временно недоступно');
});

document.getElementById('Develop').addEventListener('click', function() {
    alert('Временно недоступно');
});

document.getElementById('Yrid').addEventListener('click', function() {
    alert('Временно недоступно');
});

document.getElementById('Table1').addEventListener('click', function() {
    alert('Временно недоступно');
});

document.getElementById('Invest1').addEventListener('click', function() {
    alert('Временно недоступно');
});

document.getElementById('Develop1').addEventListener('click', function() {
    alert('Временно недоступно');
});

document.getElementById('Yrid1').addEventListener('click', function() {
    alert('Временно недоступно');
});
