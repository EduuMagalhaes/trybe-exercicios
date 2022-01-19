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

const dragonDamage = (dragon) => Math.floor((Math.random() * (dragon.strength - 15 + 1) + 15));
const warriorDamage = (warrior) => Math.floor((Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1) + warrior.strength));
const mageDamage = (mage) => { 
  return {
    damage: mage.mana < 15 ? `Não possui mana suficiente` : Math.floor((Math.random() * ((mage.intelligence * 2) - mage.intelligence  + 1) + mage.intelligence )),
    spentMana: mage.mana < 15 ? 0 : 15,
  }
}

const gameActions = {
  warriorTurn: (callback) => {
    const damage = callback(warrior);
    dragon.healthPoints -= damage;
    warrior.damage = damage;
  },
  mageTurn: (callback) => {
    const damage = callback(mage);
    dragon.healthPoints -= damage.damage;
    mage.damage = damage.damage;
    mage.mana -= damage.spentMana;
  },
  dragonTurn: (callback) => {
    const damage = callback(dragon);
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
    dragon.damage = damage;
  },
  endTurn: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.endTurn());
