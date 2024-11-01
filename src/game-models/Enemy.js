// Враг.


class Enemy {
  constructor({position}) {
    this.generateSkin();
    this.position = 2;
    this.position = position;
    this.life = true;
  }
  generateSkin() {
    const skins = ['👾', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }
  moveLeft() {
    this.position -= 1;
  }
  die() {
    this.position = '?';
    this.skin = '💀';
    this.life = false;
    console.log('Enemy is dead!');
  }
}


// class Enemy {
  // constructor() {
    // this.generateSkin();
    // this.position = 2;
  // }
// 
  // generateSkin() {
    // const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '🗿', '🤡', '🤺', '🧛', '🧟', '🎃'];
    // this.skin = skins[Math.floor(Math.random() * skins.length)];
  // }
// 
  // moveLeft() {
    // Идём влево.
    // this.position -= 1;
  // }
// 
  // die() {
    // this.position = '?';
    // console.log('Enemy is dead!');
  // }
// }

module.exports = Enemy;
