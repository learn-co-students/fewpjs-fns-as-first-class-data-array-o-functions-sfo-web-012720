function wakeDog(dogName = 'Byron', dogBreed = 'poodle') {
    // console.log(routine[0])
    return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName = 'Byron', dogBreed = 'poodle') {
    // console.log(routine[1])
    return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName = 'Byron', dogBreed = 'poodle') {
    // console.log(routine[2])
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName = 'Byron', dogBreed = 'poodle') {
    // console.log(routine[3])
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function unleashDog(dogName = 'Byron', dogBreed = 'poodle') {
    // console.log(routine[4])
    return `Unleash ${dogName} the ${dogBreed}`

}

function walkHome(dogName = 'Byron', dogBreed = 'poodle') {
    // console.log(routine[5])
    return `Walk home with ${dogName} the ${dogBreed}`
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,unleashDog,walkHome]

function exerciseDog(dogName, dogBreed) {
    return routine.map(fn => fn (dogName, dogBreed))
}

