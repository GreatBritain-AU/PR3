
const logs = [
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

const rnd = arr => arr[Math.floor(Math.random() * arr.length)];

function logBattle(attacker, defender, dmg, hp, maxHp) {
  const text = rnd(logs)
    .replace(/\[2\]/g, attacker)
    .replace(/\[1\]/g, defender);
  const info = ` ${attacker} завдав ${dmg} шкоди → ${defender}: ${hp}/${maxHp}`;
  const el = document.createElement('div');
  el.className = 'log-line';
  el.textContent = text + info;
  document.getElementById('logs')?.prepend(el);
}
