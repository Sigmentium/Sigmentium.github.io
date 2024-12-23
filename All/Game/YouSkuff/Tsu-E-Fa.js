let Player;
let Opponent;
let Item;
let click = 0;

function Winner(Player, Opponent) {
    // let Result;
    if (Player === Opponent) {
        alert('Ничья');
        // Result = "Ничья";
    }
    else if ((Player === 'Камень' && Opponent === 'Ножницы')||
        (Player === 'Ножницы' && Opponent === 'Бумага')||
        (Player === 'Бумага' && Opponent === 'Камень')) {
        alert('Вы выиграли!');
        // Result = "Вы выиграли!";
    }
    else {
        alert('Вы проиграли!');
        // Result = "Вы проиграли!";
    }
}

// Подготовка
const names = ["Александ", "Алексей", "Игнат", "Максим", "Ашот", "Сергей", "Наталия", "Ольга", "Наиле", "Мирослав"];
const Random = Math.floor(Math.random() * 10);

document.getElementById('Eminem').innerHTML = names[Random];

// Выбор игрока
const Bitem1 = document.getElementById('B1');
document.getElementById('B1').addEventListener('click', function() {
    alert('Отлично, вы выбрали камень');
    Item = 1;

    document.getElementById('After').innerHTML = `
    <div class="center" id="After2">
        <H1>Для начала, 2 раза нажмите клавишу "C"</H1>
        <div class="center">
            <button id="But"><H1>C</H1></button>
        </div>
    </div>
    `;
});
const Bitem2 = document.getElementById('B2');
document.getElementById('B2').addEventListener('click', function() {
    alert('Отлично, вы выбрали ножницы');
    Item = 2;

    document.getElementById('After').innerHTML = `
    <div class="center" id="After2">
        <H1>Для начала, 2 раза нажмите клавишу "C"</H1>
        <div class="center">
            <button id="But"><H1>C</H1></button>
        </div>
    </div>
    `;
});
const Bitem3 = document.getElementById('B3');
document.getElementById('B3').addEventListener('click', function() {
    alert('Отлично, вы выбрали бумагу');
    Item = 3;

    document.getElementById('After').innerHTML = `
    <div class="center" id="After2">
        <H1>Для начала, 2 раза нажмите клавишу "C"</H1>
        <div class="center">
            <button id="But"><H1>C</H1></button>
        </div>
    </div>
    `;
});

document.addEventListener('keydown', function(event) {
    if (typeof Item === 'undefined') {
        alert('Перед началом игры, необходимо сделать выбор');
        return;
    }
    if (event.key === '1') {
        alert('Отлично, вы выбрали камень');
        Item = 1;

        document.getElementById('After').innerHTML = `
        <div class="center" id="After2">
            <H1>Для начала, 2 раза нажмите клавишу "C"</H1>
            <div class="center">
                <button id="But"><H1>C</H1></button>
            </div>
        </div>
        `;
    }
    if (event.key === '2') {
        alert('Отлично, вы выбрали ножницы');
        Item = 2;

        document.getElementById('After').innerHTML = `
        <div class="center" id="After2">
            <H1>Для начала, 2 раза нажмите клавишу "C"</H1>
            <div class="center">
                <button id="But"><H1>C</H1></button>
            </div>
        </div>
        `;
    }
    if (event.key === '3') {
        alert('Отлично, вы выбрали бумагу');
        Item = 3;

        document.getElementById('After').innerHTML = `
        <div class="center" id="After2">
            <H1>Для начала, 2 раза нажмите клавишу "C"</H1>
            <div class="center">
                <button id="But"><H1>C</H1></button>
            </div>
        </div>
        `;
    }
});

// Выбор противника
const Reds = ['<img src="https://youskuff.github.io/Photo/Камень.png" class="img" width="200px" height="200px">', '<img src="https://youskuff.github.io/Photo/Ножницы.png" class="img" width="200px" height="200px">', '<img src="https://youskuff.github.io/Photo/Бумага.png" class="img" width="200px" height="200px">'];
const RedR = Math.floor(Math.random() * 3);

if (RedR === 0) {
    Opponent = "Камень";
}
if (RedR === 1) {
    Opponent = "Ножницы";
}
if (RedR === 2) {
    Opponent = "Бумага";
}

document.addEventListener('keydown', function(event) {
    if (['C', 'c', 'С', 'с'].includes(event.key)) {
        click++;

        if (click === 2) {
            alert('Игра начинается!');

            document.getElementById('After2').innerHTML = "";

            // Игрок
            if (Item === 1) {
                document.getElementById('Red2').innerHTML = '<img src="https://youskuff.github.io/Photo/Камень.png" class="img" width="200px" height="200px">';
                Player = "Камень";
            }
            if (Item === 2) {
                document.getElementById('Red2').innerHTML = '<img src="https://youskuff.github.io/Photo/Ножницы.png" class="img" width="200px" height="200px">';
                Player = "Ножницы";
            }
            if (Item === 3) {
                document.getElementById('Red2').innerHTML = '<img src="https://youskuff.github.io/Photo/Бумага.png" class="img" width="200px" height="200px">';
                Player = "Бумага";
            }

            // Противник
            if (RedR === 0) {
                document.getElementById('Red1').innerHTML = Reds[RedR];
            }
            if (RedR === 1) {
                document.getElementById('Red1').innerHTML = Reds[RedR];
            }
            if (RedR === 2) {
                document.getElementById('Red1').innerHTML = Reds[RedR];
            }

            click = 0;

            Winner(Player, Opponent);
        }
    }
});

document.addEventListener('click', function (event) {
    if (event.target && event.target.innerText === 'C') {
        click++;

        if (click === 2) {
            alert('Игра начинается!');

            document.getElementById('After2').innerHTML = "";

            // Игрок
            if (Item === 1) {
                document.getElementById('Red2').innerHTML = '<img src="https://youskuff.github.io/Photo/Камень.png" class="img" width="200px" height="200px">';
                Player = "Камень";
            }
            if (Item === 2) {
                document.getElementById('Red2').innerHTML = '<img src="https://youskuff.github.io/Photo/Ножницы.png" class="img" width="200px" height="200px">';
                Player = "Ножницы";
            }
            if (Item === 3) {
                document.getElementById('Red2').innerHTML = '<img src="https://youskuff.github.io/Photo/Бумага.png" class="img" width="200px" height="200px">';
                Player = "Бумага";
            }

            // Противник
            if (RedR === 0) {
                document.getElementById('Red1').innerHTML = Reds[RedR];
            }
            if (RedR === 1) {
                document.getElementById('Red1').innerHTML = Reds[RedR];
            }
            if (RedR === 2) {
                document.getElementById('Red1').innerHTML = Reds[RedR];
            }

            click = 0;

            Winner(Player, Opponent);
        }
    }
});