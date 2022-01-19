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
  damage: function () {
    const maxDamage = this.strength * this.weaponDmg;
    return Math.round(Math.random() * (maxDamage - this.strength)) + this.strength
  },
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: function () {
    return Math.round(Math.random() * (this.strength - 15)) + 15
  },
};

const battleMembers = { mage, warrior, dragon };

console.log(dragon.damage());
console.log(warrior.damage());
