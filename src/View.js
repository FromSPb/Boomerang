// Сделаем отдельный класс для отображения игры в консоли.
const inquirer = require('inquirer');

class View {
  constructor() {
    this.checkDieEnemy = false;
    this.end = false;
  }

  render(track) {
    const yourTeamName = 'DreamTeam';
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }

  checkWin() {
    if (this.end) {
      console.log("You win!");
    }
  }

  registration() {
    return inquirer
      .prompt([
        { type: 'input', name: 'username', message: 'Введи имя:' },
        { type: 'input', name: 'email', message: 'Введи email:' },
        {
          type: 'list',
          name: 'scins',
          message: 'Выберите скин:',
          choices: [
            { name: 'Волшебник :🧙', value: '🧙' },
            { name: 'Супермен :🦸‍♂️', value: '🦸‍♂️' },
            { name: 'Ковбой: 🤠', value: '🤠' },
            { name: 'Робот: 🤖', value: '🤖' },
          ],
        },
        {
          type: 'list', 
          name: 'weapon',
          message: 'Выберите оружие:',
          choices: [
            { name: 'Кинжал :🗡️', value: '🗡️' },
            { name: 'Огонь :🔥', value: '🔥' },
            { name: 'Топор :🪓', value: '🪓' },
            { name: 'Иссекай автобус:🚐', value: '🚐' },
            { name: 'Самокатчик:🛴', value: '🛴' },
          ],
        },
      ])
      .then((answers) => {
        console.log('Ваши ответы:');
        console.log(answers);
        return answers;
      });
  }
}

// class View {
  // render() {
    // const yourTeamName = 'Dream team';
    // 
    // Тут всё рисуем.
    // console.clear();
    // console.log(this.game.track.join(''));
    // console.log('\n\n');
    // console.log(`Created by "${yourTeamName}" with love`);
  // }
// }

module.exports = View;
