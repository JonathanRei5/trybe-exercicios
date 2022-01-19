const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: function () {
    const mageInfo = {
      mana: 0,
      damage: 0,
    };

    if (this.mana < 15) {
      mageInfo.damage = 'Não possui mana suficiente';
    } else {
      mageInfo.mana = 15;
      const maxDamage = this.intelligence * 2;
      mageInfo.damage = Math.round(Math.random() * (maxDamage - this.intelligence));
      mageInfo.damage += this.intelligence;

      this.mana -= 15;
    }

    return mageInfo;
  },
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

console.log('Dragon damage:', dragon.damage());
console.log('Warrior damage:', warrior.damage());
console.log('Mage damage:', mage.damage(), ' | Mana = ', mage.mana);
console.log('Mage damage:', mage.damage(), ' | Mana = ', mage.mana);
console.log('Mage damage:', mage.damage(), ' | Mana = ', mage.mana);
console.log('Mage damage:', mage.damage(), ' | Mana = ', mage.mana);
console.log('Mage damage:', mage.damage(), ' | Mana = ', mage.mana);
console.log('Mage damage:', mage.damage(), ' | Mana = ', mage.mana);
console.log('Mage damage:', mage.damage(), ' | Mana = ', mage.mana);
console.log('Mage damage:', mage.damage(), ' | Mana = ', mage.mana);
console.log('Mage damage:', mage.damage(), ' | Mana = ', mage.mana);
