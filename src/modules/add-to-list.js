import loadScores from './load-scores';
import { scoreList } from '../index.js';

const addToList = (name, score) => {
  if (!JSON.parse(localStorage.getItem('scores'))) {
    scoreList.list = [];
  }
  scoreList.addScore(name, score);
  loadScores();
}

export default addToList;