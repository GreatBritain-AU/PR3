const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-special');


const character = {
    name: 'Vox',
    defaultHP: 100,
    damageHP: 100,
    // elHP / elProgressbar будут назначены в init()
};

const enemy = {
    name: 'Alastor',
    defaultHP: 100,
    damageHP: 100,
    // elHP / elProgressbar будут назначены в init()
};

$btn2.addEventListener('click', function () {
    console.log('Kick');
    changeHP(random(50), character);
    changeHP(random(50), enemy);
});

$btn.addEventListener('click', function () {
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});

function init() {
    console.log('Start Game!');
    // Привязываем DOM-элементы к объектам
    character.elHP = document.getElementById('health-character');
    character.elProgressbar = document.getElementById('progressbar-character');

    enemy.elHP = document.getElementById('health-enemy');
    enemy.elProgressbar = document.getElementById('progressbar-enemy');

    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    // Конкатенируем число с процентом
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
    if (person.damageHP <= count) { // <= чтобы корректно ловить точное обнуление
        person.damageHP = 0;
        renderHP(person); // обновить перед alert
        alert(`З ганьбою ${person.name} програв цю велику битву`);
        $btn.disabled = true;
        $btn2.disabled = true;
    } else {
        person.damageHP -= count;
        renderHP(person);
    }
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();
