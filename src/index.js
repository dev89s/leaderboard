import './style.css';
import loadScores from './modules/load-scores.js';
import ScoreList from './modules/score-list.js';
import setupListeners from './modules/setup-listeners.js';
import createMock from './modules/mock-list.js';
import initGame from './modules/init-game.js';
import getScores from './modules/get-scores.js';

const scoreList = new ScoreList();
let storage = JSON.parse(localStorage.getItem('scores'));

initGame();

const fetchScores = async () => {
  const response = await getScores();

  scoreList.list = [];
  response.forEach((score) => {
    scoreList.addScore(score.user, score.score);
  });
  storage = scoreList.list;
  localStorage.setItem('scores', JSON.stringify(scoreList.list));
};

fetchScores().then(() => {
  if (!storage || storage.length === 0) {
    scoreList.list = createMock();
  } else {
    scoreList.list = storage;
  }
  loadScores(scoreList);
  setupListeners(scoreList);
});