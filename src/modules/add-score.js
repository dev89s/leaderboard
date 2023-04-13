import initGame from './init-game.js';

const addScore = async (name, score) => {
  const data = JSON.stringify({
    user: name,
    score: Number(score),
  });

  const id = await initGame();
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

  const addScoreUrl = `${baseUrl}/${id}/scores/`;
  fetch(addScoreUrl, {
    method: 'POST',
    mode: 'cors',
    body: data,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

export default addScore;