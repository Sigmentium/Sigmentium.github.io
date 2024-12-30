let Mcoin;
let Coin;
let BuissCoin;
let SumCoin;
let SumBuisness;
let Interval;

const Upgrade1 = document.getElementById('Upgrade1');
const Upgrade2 = document.getElementById('Upgrade2');
const Upgrade3 = document.getElementById('Upgrade3');
const Upgrade4 = document.getElementById('Upgrade4');
const Upgrade5 = document.getElementById('Upgrade5');
const Upgrade6 = document.getElementById('Upgrade6');

const Buisness1 = document.getElementById('Buisness1');
const Buisness2 = document.getElementById('Buisness2');
const Buisness3 = document.getElementById('Buisness3');
const Buisness4 = document.getElementById('Buisness4');
const Buisness5 = document.getElementById('Buisness5');
const Buisness6 = document.getElementById('Buisness6');

if (localStorage.getItem('Balance') === null) {
    Mcoin = 0;
}
else {
    Mcoin = parseInt(localStorage.getItem('Balance')) || 0;
}

if (localStorage.getItem('Income') === null) {
    Coin = 1;
}
else {
    Coin = parseInt(localStorage.getItem('Income')) || 1;
}

if (localStorage.getItem('BuissIncome') === null) {
    BuissCoin = 0;
}
else {
    BuissCoin = parseInt(localStorage.getItem('BuissIncome')) || 0;
}

// Sum
if (localStorage.getItem('SumCoin') === null) {
    SumCoin = 1;
}
else {
    SumCoin = parseInt(localStorage.getItem('SumCoin')) || 1;
}

if (localStorage.getItem('SumBuisness') === null) {
    SumBuisness = 0;
}
else {
    SumBuisness = parseInt(localStorage.getItem('SumBuisness')) || 0;
}

window.onload = function() {
    Update();
}

function SaveData() {
    localStorage.setItem('Balance', Mcoin);
    localStorage.setItem('Income', Coin);
    localStorage.setItem('BuissIncome', BuissCoin);
    localStorage.setItem('SumCoin', SumCoin);
    localStorage.setItem('SumBuisness', SumBuisness);
}

function Update() {
    document.getElementById('Mcoin').innerHTML = `<h2>Баланс: ${Mcoin}</h2>`;

    document.getElementById('CIncome').innerHTML = `Доход с нажатий: ${SumCoin}`;
    document.getElementById('BIncome').innerHTML = `Доход с бизнесов: ${SumBuisness}`;

    Upgrade1.disabled = Mcoin < 10;
    Upgrade2.disabled = Mcoin < 50;
    Upgrade3.disabled = Mcoin < 100;
    Upgrade4.disabled = Mcoin < 150;
    Upgrade5.disabled = Mcoin < 200;
    Upgrade6.disabled = Mcoin < 250;

    Buisness1.disabled = Mcoin < 10000;
    Buisness2.disabled = Mcoin < 50000;
    Buisness3.disabled = Mcoin < 100000;
    Buisness4.disabled = Mcoin < 150000;
    Buisness5.disabled = Mcoin < 200000;
    Buisness6.disabled = Mcoin < 250000;
}

function BuisnessIncome() {
    Mcoin = parseInt(Mcoin) + parseInt(BuissCoin);

    SaveData();
    Update();
}

function UpgradeClick(cost, income) {
    Mcoin -= cost;
    Coin += income;
    SumCoin += income;

    SaveData();
    Update();
}

function UpgradeBuisness(cost, income) {
    Mcoin -= cost;
    BuissCoin += income;
    SumBuisness += income;

    SaveData();
    Update();
}

function Payment() {
    if (window.navigator.onLine === false) {
        alert('Для работы финансовых операций требуется небольшое подключение к интернету');
    }
}

document.getElementById('Mbutton').addEventListener('click', function() {
    Mcoin += Coin;

    SaveData();
    Update();
});

Upgrade1.addEventListener('click', () => UpgradeClick(10, 1));
Upgrade2.addEventListener('click', () => UpgradeClick(50, 5));
Upgrade3.addEventListener('click', () => UpgradeClick(100, 10));
Upgrade4.addEventListener('click', () => UpgradeClick(150, 15));
Upgrade5.addEventListener('click', () => UpgradeClick(200, 20));
Upgrade6.addEventListener('click', () => UpgradeClick(250, 25));

Buisness1.addEventListener('click', () => UpgradeBuisness(10000, 1));
Buisness2.addEventListener('click', () => UpgradeBuisness(50000, 5));
Buisness3.addEventListener('click', () => UpgradeBuisness(100000, 10));
Buisness4.addEventListener('click', () => UpgradeBuisness(150000, 15));
Buisness5.addEventListener('click', () => UpgradeBuisness(200000, 20));
Buisness6.addEventListener('click', () => UpgradeBuisness(250000, 25));

Interval = setInterval(BuisnessIncome, 30000);