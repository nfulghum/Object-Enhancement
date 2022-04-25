// Same keys and values
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

// Computed Property Names
let favoriteNumber = 42;

const instructor = {
    firstName: 'Nick',
    [favoriteNumber]: 'That is my favorite number!'
}

// Object Methods
const instructor = {
    firstName: 'Nick',
    sayHi() {
        return 'Hi!';
    },
    SayBye() {
        return this.firstName + ' says bye!';
    }
}

// createAnimal function
function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}