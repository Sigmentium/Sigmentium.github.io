let Player;
let Opponent;
let Attemp;
let OppoAttemp;

let Bulls = 0;
let Cows = 0;

function SendAttemp() {
    Attemp = prompt('Введите число (4 цифры)');
    if (Attemp === "" || Attemp === null) {
        alert('Необходимо ввести число');
        return;
    }
    if (Attemp.length > 4) {
        alert('Число не должно превышать более 4 цифр!');
        return;
    }
    if (Attemp.length < 4) {
        alert('Число не должно быть менее 4 цифр!');
        return;
    }

    for (let A = 0; A < 4; A++) {
        if (Attemp[A] === Opponent[A]) {
            Bulls++;
        }
        else if (Opponent.includes(Attemp[A])) {
            Cows++;
        }
    }

    if (Bulls === 4) {
        alert('Победа!');
        window.location.reload();
    }

    document.getElementById('Attemps').innerHTML += `<H1>${Attemp}: Быки - ${Bulls}. Коровы - ${Cows}</H1>`;

    Bulls = 0;
    Cows = 0;
}

function OpponentAttemp() {
    OppoAttemp = String(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
    if (OppoAttemp === Player) {
        alert('Проигрыш!');
        window.location.reload();
    }
}

document.getElementById('Start').addEventListener('click', function() {
    // Подготовка
    const names = ["Александ", "Алексей", "Игнат", "Максим", "Ашот", "Сергей", "Наталия", "Ольга", "Наиле", "Мирослав"];
    const Random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    
    // Выбор игрока
    Player = prompt('Введите число (4 цифры)');
    if (Player === "" || Player === null) {
        alert('Необходимо ввести число');
        return;
    }
    if (Player.length > 4) {
        alert('Число не должно превышать более 4 цифр!');
        return;
    }
    if (Player.length < 4) {
        alert('Число не должно быть менее 4 цифр!');
        return;
    }

    // Выбор противника
    Opponent = String(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);

    document.getElementById('Main').innerHTML = `
    <div class="center">
        <img src="https://youskuff.github.io/Photo/Враг.jpg" width="200px" height="200px">
        <H1 id="Eminem"></H1>
        <br><br>
        <H2 id="MyNum"></H2>
        <br><br>
        <button id="Attemp"><H3>Сделать попытку</H3></button>
        <div id="Attemps">
        </div>
    </div>
    `;

    document.getElementById('Eminem').innerHTML = `Ваш противник: ${names[Random]}`;

    document.getElementById('MyNum').innerHTML = `Ваше число: ${Player}`;

    // Попытка
    document.getElementById('Attemp').addEventListener('click', function() {
        SendAttemp();
        OpponentAttemp();
    });
});