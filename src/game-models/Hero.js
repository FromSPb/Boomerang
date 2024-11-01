// Наш герой.

class Hero {
  constructor({ position }) {
    this.generateSkin(); // можете использовать любые emoji '💃'
    this.position = position;
  }

  generateSkin() {
    const skins = ['🤠', '💩','🧑‍🦽‍➡️'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
