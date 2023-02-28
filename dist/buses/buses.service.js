"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusesService = void 0;
const common_1 = require("@nestjs/common");
let BUSES = [
    { id: 1, name: 'Bus 1' },
    { id: 2, name: 'Bus 2' },
    { id: 3, name: 'Bus 3' },
    { id: 4, name: 'Bus 4' }
];
let BusesService = class BusesService {
    constructor() { }
    getAll() {
        return BUSES;
    }
    getById(id) {
        return BUSES.find(bus => bus.id === id);
    }
};
BusesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], BusesService);
exports.BusesService = BusesService;
//# sourceMappingURL=buses.service.js.map