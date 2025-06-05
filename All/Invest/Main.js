const Data = [document.getElementById('FIO'), document.getElementById('FIO1'), document.getElementById('Save'), document.getElementById('Save1'), document.getElementById('1'), document.getElementById('2'), document.getElementById('3'), document.getElementById('4')];

window.onload = function() {
    if (!localStorage.getItem('PersonalId') || !localStorage.getItem('Login')) {
        location.href = '../Log/Signin';
    }
    
    if (localStorage.getItem('Name') !== null) {
        // Ввод 1
        try { Data[0].innerHTML = `<H2>${localStorage.getItem('Name')}</H2>`; }
        catch { console.clear(); }

        // Ввод 2
        try { Data[1].innerHTML = `<H2>${localStorage.getItem('Name')}</H2>`; }
        catch { console.clear(); }

        // Кнопка 1
        try { Data[2].remove(); }
        catch { console.clear(); }

        // Кнопка 2
        try { Data[3].remove(); }
        catch { console.clear(); }

        // Отступ 1 (1)
        try { Data[4].remove(); }
        catch { console.clear(); }

        // Отступ 2 (1)
        try { Data[5].remove(); }
        catch { console.clear(); }

        // Отступ 3 (2)
        try { Data[6].remove(); }
        catch { console.clear(); }

        // Отступ 4 (2)
        try { Data[7].remove(); }
        catch { console.clear(); }
    }
}

document.getElementById('Actions').addEventListener('click', function() {
    sessionStorage.removeItem('Expansions');
    sessionStorage.setItem('Actions', 'Акций');

    location.href = 'Data';
});

document.getElementById('Expansions').addEventListener('click', function() {
    sessionStorage.removeItem('Actions');
    sessionStorage.setItem('Expansions', 'Подписок');

    location.href = 'Data';
});

try {
    document.getElementById('SaveButton').addEventListener('click', function() {
        const Name = document.getElementById('Name').value;

        if (Name.length <= 1) {
            alert('Поле обязательно для заполнения!');
            return;
        }
        else {
            localStorage.setItem('Name', Name);
            window.location.reload();
        }
    });
}
catch {
    console.clear();
}

try {
    document.getElementById('SaveButton1').addEventListener('click', function() {
        const Name = document.getElementById('Name1').value;

        if (Name.length <= 1) {
            alert('Поле обязательно для заполнения!');
            return;
        }
        else {
            localStorage.setItem('Name', Name);
            window.location.reload();
        }
    });
}
catch {
    console.clear();
}