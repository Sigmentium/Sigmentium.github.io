const tbody = document.querySelector('#Table tbody');

fetch('https://back-leaderboard.onrender.com/YouSkuff/TsuEFa')
    .then(response => response.json())
    .then(data => {
        data.forEach((player, index) => {
            const tr = document.createElement('tr');
            
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${player.Name}</td>
                <td>${player.Victories}</td>
            `;
            tbody.appendChild(tr);
        });
    });