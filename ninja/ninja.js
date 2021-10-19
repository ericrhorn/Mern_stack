class Ninja {
  constructor(name, health, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName() {
    console.log("this ninjas name is " + this.name);
  }

  showStats() {
    console.log("Ninja stats" + this.name);
    console.log("health" + this.health);
    console.log("speed" + this.speed);
    console.log("strength" + this.strength);
  }

  drinkSake() {
    this.health += 10;
    console.log("Bottoms up!, " + this.name + " ninja health is now " + this.health);
  }
}

class Sensei extends Ninja {
    constructor (name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super (name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("wise words")
    }
}
    

const ninja1 = new Ninja("John", 20, 10, 5);

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1);

const ninja2 = new Ninja("Joe", 20, 10);

ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
console.log(ninja2);

const sensei1 = new Sensei("darel", 30, 50, 100);

sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();
console.log(sensei1);