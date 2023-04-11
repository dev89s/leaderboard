import addToList from './add-to-list.js';
import { scoreList } from '../index.js';

const setupListeners = () => {
  const nameInput = document.querySelector('.score-name-input');
  const scoreInput = document.querySelector('.score-number-input');
  const submit = document.querySelector('#submit-score');

  submit.addEventListener('click', () => {
    const nameReg = new RegExp(/^[A-Za-z]{1}[A-Za-z0-9]*/g);
    const numReg = new RegExp(/^[1-9]{1}[0-9]*/g);
    if (nameReg.test(nameInput.value) && numReg.test(scoreInput.value)) {
      addToList(nameInput.value, scoreInput.value, scoreList);
      nameInput.value = '';
      scoreInput.value = '';
    } else {
      alert('please enter correct input');
    }
  });
}

export default setupListeners;