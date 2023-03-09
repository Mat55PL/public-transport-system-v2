"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusesService = void 0;
const common_1 = require("@nestjs/common");
let BUSES = [
    { id: 1, brand: 'Złom', model: 'Złomek', plate: 'ZŁM ZŁM' },
    { id: 2, brand: 'Autosan', model: 'H9', plate: "RZ 0002" },
    { id: 3, brand: 'Mercedes', model: 'O530', plate: "RZ 0003" },
    { id: 4, brand: 'Solaris', model: 'Urbino 12', plate: "RZ 0004" },
    { id: 5, brand: 'Solaris', model: 'Urbino 18', plate: "RZ 0005" }
];
let BusesService = class BusesService {
    getAll() {
        return BUSES;
    }
    getById(id) {
        return BUSES.find(bus => bus.id === id);
    }
    add(brand, model, plate) {
        const id = BUSES.length + 1;
        const newBus = { id, brand, model, plate };
        BUSES.push(newBus);
        return newBus;
    }
    delete(id) {
        BUSES = BUSES.filter(bus => bus.id !== id);
    }
    edit(id, brand, model, plate) {
        try {
            const index = BUSES.findIndex(bus => bus.id === id);
            if (index === -1) {
                throw new common_1.HttpException('Bus not found', common_1.HttpStatus.NOT_FOUND);
            }
            BUSES[index] = { id, brand, model, plate };
            return BUSES;
        }
        catch (error) {
            console.log(error);
        }
    }
};
BusesService = __decorate([
    (0, common_1.Injectable)()
], BusesService);
exports.BusesService = BusesService;
//# sourceMappingURL=buses.service.js.map