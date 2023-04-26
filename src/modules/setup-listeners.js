import addToList from './add-to-list.js';
import getScores from './get-scores.js';
import initGame from './init-game.js';
import loadScores from './load-scores.js';
import createMock from './mock-list.js';
import ScoreList from './score-list.js';

const setupListeners = (scoreList) => {
  const nameInput = document.querySelector('.score-name-input');
  const scoreInput = document.querySelector('.score-number-input');
  const submit = document.querySelector('#submit-score');
  const error = document.querySelector('.error');
  const refresh = document.querySelector('.refresh');

  submit.addEventListener('click', () => {
    const nameReg = new RegExp(/^[A-Za-z]{1}[A-Za-z0-9]*/g);
    const numReg = new RegExp(/^[1-9]{1}[0-9]*/g);
    if (nameReg.test(nameInput.value) && numReg.test(scoreInput.value)) {
      addToList(nameInput.value, scoreInput.value, scoreList);
      nameInput.value = '';
      scoreInput.value = '';
      nameInput.focus();
    } else {
      error.classList.toggle('show');
      setTimeout(() => {
        error.classList.toggle('show');
        nameInput.focus();
      }, 3000);
    }
    setTimeout(() => {
      submit.blur();
    }, 500);
  });

  scoreInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const nameReg = new RegExp(/^[A-Za-z]{1}[A-Za-z0-9]*/g);
      const numReg = new RegExp(/^[1-9]{1}[0-9]*/g);
      if (nameReg.test(nameInput.value) && numReg.test(scoreInput.value)) {
        addToList(nameInput.value, scoreInput.value, scoreList);
        nameInput.value = '';
        scoreInput.value = '';
        nameInput.focus();
      } else {
        error.classList.toggle('show');
        setTimeout(() => {
          error.classList.toggle('show');
          nameInput.focus();
        }, 3000);
      }
    }
  });

  refresh.addEventListener('click', () => {
    const reload = async () => {
      initGame();
      loadScores(new ScoreList());
      const response = await getScores();
      if (response.length !== 0) {
        scoreList.list = [];
        response.forEach((score) => {
          scoreList.addScore(score.user, score.score);
        });
        localStorage.setItem('scores', JSON.stringify(scoreList.list));
      } else {
        scoreList.list = createMock();
        localStorage.setItem('scores', JSON.stringify(response));
      }
      loadScores(scoreList);
    };
    reload();
  });
};
export default setupListeners;