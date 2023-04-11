export default class ScoreList {
  constructor() {
    this.list = [];
  };

  addScore(name, score, index = this.list.length) {
    const scoreOb = {
      name: name,
      score: score,
      index: index,
    };
    this.list.push(scoreOb);
    localStorage.setItem('scores', JSON.stringify(this.list));
  }

  mockList() {
    const mockList = [
      {
        name: 'name 1',
        score: 200,
        index: 1,
      },
      {
        name: 'name 2',
        score: 70,
        index: 2,
      },
      {
        name: 'name 3',
        score: 50,
        index: 3,
      },
      {
        name: 'name 4',
        score: 300,
        index: 4,
      },
    ];
    this.list = mockList;
  }
}