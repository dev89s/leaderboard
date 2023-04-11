import './style.css';
import loadScores from './modules/load-scores.js';
import ScoreList from './modules/score-list.js';
import setupListeners from './modules/setup-listeners.js';
import createMock from './modules/mock-list.js';

const scoreList = new ScoreList();
const storage = JSON.parse(localStorage.getItem('scores'));

if (!storage) {
  scoreList.list = createMock();
} else {
  scoreList.list = storage;
}

loadScores(scoreList);
setupListeners(scoreList);
