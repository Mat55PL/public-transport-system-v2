import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
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
   //constructor(private configService: ConfigService) { }

   getAll() {
      return BUSES;
   }

   getById(id: number) {
      return BUSES.find(bus => bus.id === id);
   }

   add(brand: string, model: string, plate: string) {
      const id = BUSES.length + 1;
      const newBus = { id, brand, model, plate };
      BUSES.push(newBus);
      return newBus;
   }

   delete(id: number) {
      BUSES = BUSES.filter(bus => bus.id !== id);
      //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
   }

   edit(id: number, brand: string, model: string, plate: string) {
      try {
         const index = BUSES.findIndex(bus => bus.id === id);
         if(index === -1) {
            throw new HttpException('Bus not found', HttpStatus.NOT_FOUND);
         }
         BUSES[index] = { id, brand, model, plate };
         return BUSES;
      } catch (error) {
         console.log(error);
      }
   }
}


