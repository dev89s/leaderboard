import loadScores from './load-scores.js';

const addToList = (name, score, scoreList) => {
  if (!JSON.parse(localStorage.getItem('scores'))) {
    scoreList.list = [];
  }
  scoreList.addScore(name, score);
  loadScores(scoreList);
};

export default addToList;