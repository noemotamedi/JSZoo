//PART I
var animalPopulation=0;
function sleep(name){
    console.log(name+" sleeps for 8 hours")
}
function run(){
   /* sleep("tigger");
    eat("Tigger", "meat");
    eat("Tigger", "bacon");
*/


    let tigger = new Tiger("Tigger");
    tigger.eat("meat");
    tigger.eat("Zoe The Zookeeper");

    let pooh= new Bear("Pooh");
    pooh.eat("fish");
    pooh.sleep();

    let rarity= new Unicorns("Rarity");
    rarity.eat("marshmallows");
    rarity.sleep();

    let gemma= new Giraffes("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    gemma.sleep();

    let stinger= new Bees("Stinger");
    stinger.eat("Ice Cream");
    stinger.eat("pollen");
    stinger.sleep();
    console.log("asdbkbo[");
    let zoebot= new Zookeeper("Zoebot");
    zoebot.feedAnimals([tigger,pooh,rarity,gemma,stinger],"meat")
    Animal.getPopulation();
    tigger.getPopulation();
}


//PART II
/*var favoriteFood="bacon";
function eat(name,food){
console.log(name +" eats "+food);
    foodThing = (food==favoriteFood) ? console.log("YUM!!! "+name+" wants more "+food):"";
}
*/

//PART III

/*
class Polygon {

    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }

    //method #1
    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }

    //method #2
    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) ' +
            'and gonia (angle).');
    }

}*/



// class Tiger {
//
//     constructor(name) {
//         this.name=name;
//         this.favoriteFood= "meat"
//
//     }
//
//     sleep() {
//         console.log(this.name+" sleeps for 8 hours")
//
//     }
//
//     eat(food) {
//         console.log(this.name +" eats "+food);
//         (food==this.favoriteFood) ? console.log("YUM!!! "+this.name+" wants more "+food):"";
//
//     }
//
// }


//PART IV
// class Bear {
//
//     constructor(name) {
//         this.name=name;
//         this.favoriteFood= "fish"
//
//     }
//
//     sleep() {
//         console.log(this.name+" hibernates for 4 months")
//
//     }
//
//     eat(food) {
//         console.log(this.name +" eats "+food);
//         (food==this.favoriteFood) ? console.log("YUM!!! "+this.name+" wants more "+food):"";
//
//     }
//
// }


//PART V
class Animal {
    // Put your instance variables here

    constructor(name,favoriteFood) {
        this.name=name;
        this.favoriteFood=favoriteFood;
        animalPopulation++;
    }

    sleep() {
        console.log(this.name+" sleeps for 8 hours")

    }

    eat(food) {
        console.log(this.name +" eats "+food);
        (food==this.favoriteFood) ? console.log("YUM!!! "+this.name+" wants more "+food):"";

    }
    static getPopulation() {
        console.log(animalPopulation)
        return animalPopulation;
    }
}


// class Shape {
//
//     constructor(name) {
//         this.name = name;
//         this.special = true;
//     }
//
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     sayHistory() {
//         console.log("Shapes have a wonderful history.");
//     }
// }


//PART VI
//Tiger and Bear subclasses below
class Tiger extends Animal {

    constructor(name) {
        super(name,"meat");
    }
}

class Bear extends Animal {
    constructor(name) {
      super(name,"fish");
      super.sleep();
    }
    sleep() {
        console.log(this.name+" hibernates for 4 months")
    }
}


//PART VII
class Unicorns extends Animal {
    constructor(name) {
        super(name,"marshmallows");
    }
    sleep() {
        console.log(this.name+ " sleeps in a cloud")
    }
}

class Giraffes extends Animal {
    constructor(name) {
        super(name,"leaves");
    }
    eat(food) {
        (food==this.favoriteFood) ? console.log(this.name+" eats "+food):console.log("YUCK!!! "+this.name+ " will not eat "+food);
        (food==this.favoriteFood) ? console.log("YUM!!! "+this.name+" wants more "+food):"";
    }
}

class Bees extends Animal {
    constructor(name) {
        super(name, "pollen");
    }
        eat(food){
            (food==this.favoriteFood) ? console.log(this.name+" eats "+food):console.log("YUCK!!! "+this.name+ " will not eat "+food);
            (food==this.favoriteFood) ? console.log("YUM!!! "+this.name+" wants more "+food):"";
        }

    sleep() {
        console.log(this.name+" never sleeps")
    }
}


//PART VIII
class Zookeeper {
    constructor(name) {
        this.name=name;
    }
    feedAnimals(animals,food){
        console.log(this.name+"  is feeding "+food+" to "+animals.length+" of "+animalPopulation +" total animals")
        for(let element in animals){
            animals[element].eat(food)
        }
    }
}


//PART IX
