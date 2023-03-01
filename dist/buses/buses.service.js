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
    { id: 1, brand: 'Złom' },
    { id: 2, brand: 'Autosan' },
    { id: 3, brand: 'Mercedes' },
    { id: 4, brand: 'Solaris' }
];
let BusesService = class BusesService {
    getAll() {
        return BUSES;
    }
    getById(id) {
        return BUSES.find(bus => bus.id === id);
    }
    add(brand) {
        BUSES.push({ id: BUSES.length + 1, brand });
    }
    delete(id) {
        BUSES = BUSES.filter(bus => bus.id !== id);
    }
};
BusesService = __decorate([
    (0, common_1.Injectable)()
], BusesService);
exports.BusesService = BusesService;
//# sourceMappingURL=buses.service.js.map