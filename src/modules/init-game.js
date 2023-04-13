async function createGame() {
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const data = JSON.stringify({
    name: 'Football8999',
  });
  const retVal = await fetch(baseUrl, {
    method: 'POST',
    mode: 'cors',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response = await retVal.json();
  const id = response.result.split(' ')[3];
  return id;
}

const initGame = async () => {
  let id;
  if (!localStorage.getItem('id')) {
    id = await createGame().then((id) => {
      localStorage.setItem('id', id);
    });
  } else {
    id = localStorage.getItem('id');
  }
  return id;
};

export default initGame;