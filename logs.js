export const logs = [
  '[1] згадав щось важливе, але [2], злякавшись, вдарив у передпліччя ворога.',
  '[1] поперхнувся, а [2] від страху врізав коліном у лоб.',
  '[1] замріявся, але [2] тихцем підкрався й ударив.',
  '[1] опанував себе, та [2] випадково наніс потужний удар.',
  '[1] поперхнувся, а [2] нехотя розтрощив кулаком <цензура> суперника.',
  '[1] здивувався, а [2], похитнувшись, вліпив підлий удар.',
  '[1] висякався, і [2] провів дроблячий удар.',
  '[1] похитнувся, і [2] без причини вдарив у ногу.',
  '[1] засмутився, як [2] випадково врізав ногою в живіт.',
  '[1] хотів щось сказати, але [2] від нудьги розбив брову.'
];

// Випадковий шаблон
function getRandomLogTemplate() {
  return logs[Math.floor(Math.random() * logs.length)];
}

// Форматування шаблону
function formatLog(template, attacker, defender) {
  return template
    .replace(/\[2\]/g, attacker)
    .replace(/\[1\]/g, defender);
}

// Додавання запису в лог
export function addLogEntry(text) {
  const logsContainer = document.getElementById('logs');
  if (!logsContainer) return;
  const line = document.createElement('div');
  line.className = 'log-line';
  line.textContent = text;
  logsContainer.prepend(line);
}

// Основна функція логування бою
export function getBattleLog(attacker, defender, damage, defenderHP, defenderMaxHP) {
  const template = getRandomLogTemplate();
  const text = formatLog(template, attacker, defender);
  const info = ` ${attacker} завдав ${damage} шкоди → ${defender}: ${defenderHP}/${defenderMaxHP}`;
  addLogEntry(text + info);
}
