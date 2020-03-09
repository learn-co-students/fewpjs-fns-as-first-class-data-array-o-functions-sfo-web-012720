
let wakeDog = function(name, breed) {
    //console.log(`Wake ${name} the ${breed}`);
    return (`Wake ${name} the ${breed}`)
}

let leashDog = function(name, breed) {
    return(`Leash ${name} the ${breed}`);
}
let walkToPark = function(name, breed) {
    return(`Walk to the park with ${name} the ${breed}`);
}
let throwFrisbee = function(name, breed) {
    return(`Throw the frisbee for ${name} the ${breed}`);
}

let walkHome = function(name, breed) {
    return(`Walk home with ${name} the ${breed}`);
}

let unleashDog = function(name, breed) {
    return(`Unleash ${name} the ${breed}`);
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(name, breed) {
    // for ( let i = 0; i < routine.length; i++ ) {
    //     routine[i](name, breed);
    // }
    return routine.map(fn => fn(name, breed))
}