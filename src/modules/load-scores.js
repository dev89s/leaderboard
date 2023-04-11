import { scoreList } from "../index.js";

const loadScores = () => {
  const scoreEl = document.querySelector('.score-list');
  scoreEl.textContent = '';
  scoreList.list.forEach((score) => {
    const li = document.createElement('li');
    li.classList.add('score-item');
    if (score.index % 2 === 1) {
      li.classList.add('grey');
    }
    li.textContent = `${score.name}: ${score.score}`;
    scoreEl.appendChild(li);
  });
};

export default loadScores;