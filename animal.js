class AnimalKingdom {
    constructor(name, backbone) {
        if (this.constructor === AnimalKingdom) {
            throw new Error('Bro, nobody is allowed to instantiate this class');
        }
        this.name = name;
        this.backbone = backbone;
        this.subgroups = [];
        this.warmBlooded = false;
    }

    makeSound() {
        console.log('All animals make noise');
    }

    // making use of encapsulation to create a private method
    #addSubgroup(subgroup) {
        this.subgroups.push(subgroup);
    }

    // accessing the private method we created.
    createSubgroup(subgroup) {
        this.#addSubgroup(subgroup);
    }
    
}

class Vertebrate extends AnimalKingdom {
    constructor(name, backbone) {
        super(name, backbone);
    }

    // Let's use polymorphism to customize the sound of vertebrates.
    makeSound() {
        console.log('This sound is for cold-blooded vertebrates');
    }
}

class WarmBlooded extends Vertebrate {
    constructor(name, backbone) {
        super(name, backbone);
        this.warmBlooded = true;
    }

    makeSound() {
        console.log('This sound is for warm-blooded vertebrates');
    }
}

class Invertebrate extends AnimalKingdom {
    constructor(name) {
        super(name, false); // Invertebrates are always cold-blooded
    }
}

// Define the Subgroup class (Abstraction)
class Subgroup {
    constructor(name) {
        this.name = name;
    }
}

const vertebrates = new Vertebrate("Vertebrates", true);
const invertebrates = new Invertebrate("Invertebrates");
const warmBlooded = new WarmBlooded("Warm-Blooded", true);

// Subgroups of Vertebrates
const fish = new Subgroup("Fish");
const amphibians = new Subgroup("Amphibians");
const reptiles = new Subgroup("Reptiles");
const aves = new Subgroup("Aves");
const mammals = new Subgroup("Mammals");

vertebrates.createSubgroup(fish);
vertebrates.createSubgroup(amphibians);
vertebrates.createSubgroup(reptiles);
warmBlooded.createSubgroup(aves);
warmBlooded.createSubgroup(mammals);

// Subgroup of Invertebrates
const anthropoda = new Subgroup("Anthropoda");

invertebrates.createSubgroup(anthropoda);

console.log("Cold-Blooded Vertebrates:");
console.log(vertebrates);
vertebrates.makeSound();

console.log(" ");
console.log("Warm-Blooded Vertebrates:");
console.log(warmBlooded);
warmBlooded.makeSound();

console.log(" ");
console.log("Invertebrates:");
console.log(invertebrates);
