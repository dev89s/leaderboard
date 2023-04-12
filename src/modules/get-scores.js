import initGame from './init-game.js';

const getScores = async () => {
  const id = await initGame();

  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

  const addScoreUrl = `${baseUrl}/${id}/scores/`;
  const retVal = await fetch(addScoreUrl);
  const json = await retVal.json();
  return json.result;
};

export default getScores;