const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

function mageDamage() {
  const mageInfo = {
    mana: 0,
    damage: 0,
  };

  if (mage.mana < 15) {
    mageInfo.damage = 'Não possui mana suficiente';
  } else {
    mageInfo.mana = 15;
    const maxDamage = mage.intelligence * 2;
    mageInfo.damage = Math.round(Math.random() * (maxDamage - mage.intelligence));
    mageInfo.damage += mage.intelligence;
  }

  return mageInfo;
}

function warriorDamage() {
  const maxDamage = warrior.strength * warrior.weaponDmg;
  return Math.round(Math.random() * (maxDamage - warrior.strength)) + warrior.strength
}

function dragonDamage() {
  return Math.round(Math.random() * (dragon.strength - 15)) + 15
}

const gameActions = {
  warriorTurn: (damage) => {
    warrior.damage = damage();
    dragon.healthPoints -= warrior.damage;
  },

  mageTurn: (damage) => {
    const mageInfo = damage();
    mage.mana -= mageInfo.mana;
    if (isNaN(mageInfo.damage)) {
      mage.damage = 0;
    } else {
      mage.damage = mageInfo.damage;
    }
    dragon.healthPoints -= mage.damage;
  },

  dragonTurn: (damage) => {
    dragon.damage = damage();
    mage.healthPoints -= dragon.damage;
    warrior.healthPoints -= dragon.damage;
  },

  turnResult: () => battleMembers,
};

console.log(gameActions.turnResult());

gameActions.dragonTurn(dragonDamage);
gameActions.mageTurn(mageDamage);
gameActions.warriorTurn(warriorDamage);

console.log(gameActions.turnResult());
