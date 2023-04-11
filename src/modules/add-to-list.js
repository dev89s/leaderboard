import loadScores from './load-scores.js';

const addToList = (name, score, scoreList) => {
  if (!JSON.parse(localStorage.getItem('scores'))) {
    scoreList.list = [];
  }
  scoreList.addScore(name, score, scoreList);
  loadScores();
};

export default addToList;