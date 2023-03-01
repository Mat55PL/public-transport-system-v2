import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

let BUSES = [
   { id: 1, brand: 'Złom', model: 'Złomek', plate: 'ZŁM ZŁM'},
   { id: 2, brand: 'Autosan', model: 'H9', plate: "RZ 0002"},
   { id: 3, brand: 'Mercedes', model: 'O530', plate: "RZ 0003"},
   { id: 4, brand: 'Solaris', model: 'Urbino 12', plate: "RZ 0004"},
   { id: 5, brand: 'Solaris', model: 'Urbino 18', plate: "RZ 0005"}
];

@Injectable()
export class BusesService {
   constructor(private configService: ConfigService) { }

     getAll() {
         return BUSES;
     }

     getById(id: number) {
        return BUSES.find(bus => bus.id === id);
     }

     add(brand: string, model: string, plate: string) {
        BUSES.push({ id: BUSES.length + 1, brand, model, plate});
        //The push() method adds one or more elements to the end of an array and returns the new length of the array.
        return BUSES;
     }

     delete(id: number) {
          BUSES = BUSES.filter(bus => bus.id !== id);
            //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
     }

     edit(id: number, brand: string, model: string, plate: string) {
         const bus = BUSES.find(bus => bus.id === id);
         bus.brand = brand;
         bus.model = model;
         bus.plate = plate;
         return bus;
       }
}