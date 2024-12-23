const FIO = document.getElementById('FIO');
const Kart = document.getElementById('DataKart');

window.onload = function() {
    if (localStorage.getItem('Name') === null) {
        FIO.innerHTML = '<input type="text" id="Name" class="center" placeholder="ФИО">';
    }
    else {
        FIO.innerHTML = `<H2>${localStorage.getItem('Name')}</H2>`;
        document.getElementById('SaveBut').innerHTML = "";
    }

    if (localStorage.getItem('DataKart') === null) {
        Kart.innerHTML = `
        <div class="center">
            <H1>Для финансовых операций, требуется привязать карту</H1>
            <H3>Данные хранятся на вашем устройстве, мы их не получим</H3>
            <input type="text" id="NumKart" class="center" placeholder="Номер карты">
            <br><br>
            <input type="text" id="ММГГ" class="center" placeholder="ММ/ГГ">
            <input type="text" id="CVC" class="center" placeholder="CVC">
            <br><br>
            <button id="SaveKart">Сохранить</button>
        </div>
        `;
    }
    else {
        Kart.innerHTML = "";
    }
}

document.getElementById('SaveData').addEventListener('click', function() {
    const Name = document.getElementById('Name').value;
    localStorage.setItem('Name', Name);
    location.reload();
});

document.getElementById('SaveKart').addEventListener('click', function() {
    const NumKart = document.getElementById('NumKart').value;
    const ММГГ = document.getElementById('ММГГ').value;
    const CVC = document.getElementById('CVC').value;

    const DataKart = `${NumKart}, ${ММГГ}, ${CVC}`;
    localStorage.setItem('DataKart', DataKart);
});