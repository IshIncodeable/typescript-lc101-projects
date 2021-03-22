// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type

// const spacecraftName: string = "Determination";
// let speedMph: number = 17500;
// let kilometersToMars: number = 225000000;
// let kilometersToTheMoon: number = 384400;
// const milesPerKilometer: number = 0.621;


// Part 2: Print Days to MarS
// let milesToMars: number = (kilometersToMars * milesPerKilometer);
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;



// Code an output statement here (use a template literal):

//console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);

// Part 3: Create a Function ("getDaysToLocation")

// function getDaysToLocation(kilometersAway:number): number {
//     let milesAway: number = (kilometersAway * milesPerKilometer);
//     let hoursToLocation: number = milesAway / speedMph;
//     let daysToLocation = hoursToMars / 24;
    
//     return daysToLocation;
// }




// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.

//console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to Mars.`);



// Part 4: Create a Spacecraft Class

class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string; 
    speedMph: number;

    constructor(nameofSpacecraft: string, mph: number) {
        this.name = nameofSpacecraft;
        this.speedMph = mph;
    }  
    
    getDaysToLocation (kilometersAway: number): number {
        let milesAway = (kilometersAway * this.milesPerKilometer);
        let hoursToLocation = milesAway / this.speedMph;
        let daysToLocation = hoursToLocation / 24;
        
        return daysToLocation;
    }
}
    
    //Instance of Spacecraft
    let spaceShuttle = new Spacecraft('Determination', 17500);

    //Print Days to Mars
    let kilometersToMars = 225000000;
    let kilometersToTheMoon = 384400;
    console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`);
    console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);
    
    



// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
