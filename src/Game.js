// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength, heroSkin, heroWeapon }) {
    this.trackLength = trackLength;
    this.hero = new Hero({position:0}); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({position:1});
    this.heroWeapon = new Boomerang()
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
    this.heroSkin = heroSkin;
    this.heroWeapon = heroWeapon;
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    if (this.enemy.life) {
      this.weapon.moveRight();
    } else if (!this.enemy.life) {
      this.weapon.moveLeft();
    }
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.heroSkin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.weapon.position] = this.heroWeapon;

  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (this.weapon.position - this.enemy.position === -1) {
      this.enemy.die();
      this.view.checkDieEnemy = true;
    }
    if (this.weapon.position === this.hero.position) {
      this.view.end = true;
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
      this.view.checkWin();
    },70);
  }
}

module.exports = Game;
