const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-special');
const $btn3 = document.getElementById('btn-reset');

const character = {
  name: 'Vox',
  defaultHP: 100,
  damageHP: 100,
  elHP: null,
  elProgressbar: null,
  renderHP,
  changeHP,
  reset,
};

const enemy = {
  name: 'Alastor',
  defaultHP: 100,
  damageHP: 100,
  elHP: null,
  elProgressbar: null,
  renderHP,
  changeHP,
  reset,
};


function addLogEntry(text) {
  const container = document.getElementById('logs');
  if (!container) return;
  const line = document.createElement('div');
  line.className = 'log-line';
  line.textContent = text;
  container.prepend(line);
}


function renderHP() {
  const { elHP, damageHP, defaultHP, elProgressbar } = this;
  elHP.innerText = `${damageHP} / ${defaultHP}`;
  elProgressbar.style.width = `${damageHP}%`;
}

function changeHP(dmg, attackerName) {
  const { name, defaultHP } = this;
  this.damageHP -= dmg;
  if (this.damageHP <= 0) {
    this.damageHP = 0;
    this.renderHP();
    
    if (typeof logBattle === 'function') {
      logBattle(attackerName, name, dmg, this.damageHP, defaultHP);
    }
    addLogEntry(`${name} програв бій!`);
    $btn.disabled = true;
    $btn2.disabled = true;
    alert(`З ганьбою ${name} програв бій!`);
  } else {
    this.renderHP();
    if (typeof logBattle === 'function') {
      logBattle(attackerName, name, dmg, this.damageHP, defaultHP);
    }
  }
}

function reset() {
  this.damageHP = this.defaultHP;
  this.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

// кнопки
$btn.onclick = function() {
  const dmgToEnemy = random(20);
  const dmgToCharacter = random(20);
  enemy.changeHP(dmgToEnemy, character.name);
  character.changeHP(dmgToCharacter, enemy.name);
};

$btn2.onclick = function() {
  const dmgToEnemy = random(50);
  const dmgToCharacter = random(50);
  enemy.changeHP(dmgToEnemy, character.name);
  character.changeHP(dmgToCharacter, enemy.name);
};

$btn3.onclick = function() {
  character.reset();
  enemy.reset();
  $btn.disabled = false;
  $btn2.disabled = false;
  document.getElementById('logs').innerHTML = '';
  addLogEntry('Бій скинуто!');
};

// ініціалізація
function init() {
  character.elHP = document.getElementById('health-character');
  character.elProgressbar = document.getElementById('progressbar-character');
  enemy.elHP = document.getElementById('health-enemy');
  enemy.elProgressbar = document.getElementById('progressbar-enemy');
  character.renderHP();
  enemy.renderHP();
  addLogEntry('Бій починається!');
}
init();
