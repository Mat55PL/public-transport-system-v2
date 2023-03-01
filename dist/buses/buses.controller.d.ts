import { BusesService } from "./buses.service";
export declare class BusesController {
    private busesService;
    constructor(busesService: BusesService);
    getAll(): {
        id: number;
        brand: string;
    }[];
    getBusById(id: string): {
        id: number;
        brand: string;
    };
    deleteBusById(id: string): void;
}
