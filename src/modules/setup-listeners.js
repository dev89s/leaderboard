import addToList from './add-to-list.js';

const setupListeners = (scoreList) => {
  const nameInput = document.querySelector('.score-name-input');
  const scoreInput = document.querySelector('.score-number-input');
  const submit = document.querySelector('#submit-score');
  const error = document.querySelector('.error');

  submit.addEventListener('click', () => {
    const nameReg = new RegExp(/^[A-Za-z]{1}[A-Za-z0-9]*/g);
    const numReg = new RegExp(/^[1-9]{1}[0-9]*/g);
    if (nameReg.test(nameInput.value) && numReg.test(scoreInput.value)) {
      addToList(nameInput.value, scoreInput.value, scoreList);
      nameInput.value = '';
      scoreInput.value = '';
      nameInput.focus();
    } else {
      error.style.display = 'block';
      error.textContent = 'please enter correct info';
      setTimeout(() => {
        error.style.display = 'none';
        nameInput.value = '';
        scoreInput.value = '';
        nameInput.focus();
      }, 3000);
    }
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
        error.style.display = 'block';
        error.textContent = 'please enter correct info';
        setTimeout(() => {
          error.style.display = 'none';
          nameInput.value = '';
          scoreInput.value = '';
          nameInput.focus();
        }, 3000);
      }
    }
  });
};

export default setupListeners;