import { Injectable } from "@nestjs/common";

let BUSES = [
    { id: 1, name: 'Bus 1' },
    { id: 2, name: 'Bus 2' },
    { id: 3, name: 'Bus 3' },
    { id: 4, name: 'Bus 4' }
];

@Injectable()
export class BusesService {
    constructor() { }

   getAll() {
        return BUSES;
   }

   getById(id: number) {
        return BUSES.find(bus => bus.id === id);
   }
}