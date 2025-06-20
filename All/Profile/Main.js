const Id = localStorage.getItem('PersonalId');
const Login = localStorage.getItem('Login');
const Avtoritet = localStorage.getItem('Avtoritet');
const Victories = localStorage.getItem('Victories');
const ctx = document.getElementById('Victory');
const ctx2 = document.getElementById('Victory2');

if (!Id || !Login) {
    location.href = '../Log/Signin';
}

if (Avtoritet === 'false') {
    document.getElementById('Zvanie').innerHTML = '<H3>Игра на авторитет отключена</H3>';
    document.getElementById('Zvanie2').innerHTML = '<H3>Игра на авторитет отключена</H3>';
}

document.getElementById('Login').innerHTML = Login;
document.getElementById('Login2').innerHTML = Login;
document.getElementById('Id').innerHTML = Id;
document.getElementById('Id2').innerHTML = Id;

document.getElementById('Copy').addEventListener('click', function() {
    navigator.clipboard.writeText(Id);
});

document.getElementById('Copy2').addEventListener('click', function() {
    navigator.clipboard.writeText(Id);
});

// Victory Graph
if (Avtoritet === 'true') {
    new Chart(ctx, {
        type:'line',
        data: {
            labels: [10, 20, 30, 40, 50, 60],
            datasets: [{
                label:'График побед',
                data: JSON.parse(Victories),
                fill:true,
                borderColor:'black',
                tension:0.1
            }]
        }
    });

    new Chart(ctx2, {
        type:'line',
        data: {
            labels: [10, 20, 30, 40, 50, 60],
            datasets: [{
                label:'График побед',
                data: JSON.parse(Victories),
                fill:true,
                borderColor:'black',
                tension:0.1
            }]
        }
    });
}
else if (Avtoritet === 'false') {
    document.getElementById('AvtorFalse').innerHTML = '<H3 class="center">Игра на авторитет отключена</H3>';
    document.getElementById('AvtorFalse2').innerHTML = '<H3 class="center">Игра на авторитет отключена</H3>';
}