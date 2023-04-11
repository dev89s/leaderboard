const loadScores = (scoreList) => {
  const scoreEl = document.querySelector('.score-list');
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