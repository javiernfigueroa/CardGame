
function getDiceRollArray(diceCount) {
    const newDiceRolls = new Array(diceCount).fill(0).map(function () {
      return Math.floor(Math.random() * 6) + 1;
    });
    return newDiceRolls;
  }

  export { getDiceRollArray }