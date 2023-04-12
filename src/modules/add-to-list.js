import loadScores from './load-scores.js';
import addScore from './add-score.js';

const addToList = (name, score, scoreList) => {
  if (!JSON.parse(localStorage.getItem('scores'))
    || JSON.parse(localStorage.getItem('scores')).length === 0) {
    scoreList.list = [];
  }
  addScore(name, score);
  scoreList.addScore(name, score);
  loadScores(scoreList);
};

export default addToList;