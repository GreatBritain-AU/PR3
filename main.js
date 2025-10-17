const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-special');
const $btn3 = document.getElementById('btn-reset');

const character = {
    name: 'Vox',
    defaultHP: 100,
    damageHP: 100,
    elHP: null,
    elProgressbar: null,
    renderHP: renderHP,
    changeHP: changeHP,
    reset: reset,
};

const enemy = {
    name: 'Alastor',
    defaultHP: 100,
    damageHP: 100,
    elHP: null,
    elProgressbar: null,
    renderHP: renderHP,
    changeHP: changeHP,
    reset: reset,
};

function renderHP() {
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
        this.elProgressbar.style.width = this.damageHP + '%';
    }

   function changeHP(dmg) {
        this.damageHP -= dmg;
        if (this.damageHP <= 0) {
            this.damageHP = 0;
            this.renderHP();
            alert(`З ганьбою ${this.name} програв цю битву`);
            $btn.disabled = true;
            $btn2.disabled = true;
        } else {
            this.renderHP();
        }
    }

    function reset() {
        this.damageHP = this.defaultHP;
        this.renderHP();
    }

// кнопки
$btn.onclick = function() {
    character.changeHP(random(20));
    enemy.changeHP(random(20));
};

$btn2.onclick = function() {
    character.changeHP(random(50));
    enemy.changeHP(random(50));
};

$btn3.onclick = function() {
    character.reset();
    enemy.reset();
    $btn.disabled = false;
    $btn2.disabled = false;
};

function init() {
    character.elHP = document.getElementById('health-character');
    character.elProgressbar = document.getElementById('progressbar-character');

    enemy.elHP = document.getElementById('health-enemy');
    enemy.elProgressbar = document.getElementById('progressbar-enemy');

    character.renderHP();
    enemy.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();
