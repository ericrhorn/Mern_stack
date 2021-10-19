class Ninja {
  constructor(name, health, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.stength = strength;
  }

  sayName() {
    console.log("this ninjas name is" + this.name);
  }

  showStats() {
    console.log("Ninja stats" + this.name);
    console.log("health" + this.health);
    console.log("speed" + this.speed);
    console.log("strength" + this.strength);
  }

  drinkSake() {
    this.health += 10;
    console.log(this.name + "ninja health is now" + this.health);
  }
}

const ninja1 = new Ninja("John", 5, 5, 10);

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const ninja2 = new Ninja("Joe", 10, 10, 20);

ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
