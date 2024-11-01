// Основной файл.
// Запускает игру.
const Game = require('./src/Game');
const View = require('./src/View');

// Создание экземпляра класса View
const view = new View();
// Вызов метода rega() из класса View и запуск игры после завершения
view.rega()
  .then((answers) => {
    console.log('Выбор игрока:', answers);

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
  heroSkin: answers.scins,
  heroWeapon: answers.weapon,
});

  // Запуск игры.
  game.play();
})
  .catch((error) => {
    console.error('Ошибка при вызове rega():', error);
  });
