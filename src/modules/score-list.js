export default class ScoreList {
  constructor() {
    this.list = [];
  }

  addScore(name, score, index = this.list.length + 1) {
    const scoreOb = {
      name,
      score,
      index,
    };
    this.list.push(scoreOb);
    localStorage.setItem('scores', JSON.stringify(this.list));
  }
}