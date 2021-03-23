import {Payload} from './Payload';

export class Cargo implements Payload{
    //Properties and Methods
    massKg: number; 
    material: string;

    constructor (masskg: number, material: string) {
        this.massKg = massKg;
        this.material = material;
    }
}
