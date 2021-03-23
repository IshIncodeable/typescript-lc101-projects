import {Payload} from './Payload';
import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';


export class Rocket {
    //Properties and Methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronauts[] =[];

    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let sum = 0;  
        for (let i = 0; i < item.length; i++ ) {
             sum += mass[i].massKg;
         }
         return sum;
    }

    currentMassKg() {
        let totalMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
        return totalMass
    }

    canAdd(item: Payload): boolean{
        return(this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean{
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else { return false }
    }
    
    addAstronaut(astronaut: Astronaut): boolean{
        if (this.canAdd(astronaut)){
            this.astronaut.push(cargo);
            return true;
        } else { return false }        
    }

    


}

