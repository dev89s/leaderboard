import './style.css';
import loadScores from './modules/load-scores.js';
import ScoreList from './modules/score-list.js';

const scoreList = new ScoreList();
const storage = JSON.parse(localStorage.getItem('scores'));

if (!storage) {
  scoreList.mockList();
} else {
  scoreList.list = storage;
}

loadScores(scoreList);