import {Payload} from './Payload';

export class Astronaut implements Payload {
    //properties and methods
    name: string;
    massKg: number;

    constructor (kg: number, name: string) {
        this.massKg = kg;
        this.name = name; 
    }
}


//import {Astronaut} from './Astronaut';