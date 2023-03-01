import { Injectable } from "@nestjs/common";

let BUSES = [
    { id: 1, brand: 'Złom' },
    { id: 2, brand: 'Autosan' },
    { id: 3, brand: 'Mercedes' },
    { id: 4, brand: 'Solaris' }
];

@Injectable()
export class BusesService {

     getAll() {
        return BUSES;
     }

     getById(id: number) {
        return BUSES.find(bus => bus.id === id);
     }

     add(brand: string) {
        BUSES.push({ id: BUSES.length + 1, brand });
     }

     delete(id: number) {
          BUSES = BUSES.filter(bus => bus.id !== id);
     }
}