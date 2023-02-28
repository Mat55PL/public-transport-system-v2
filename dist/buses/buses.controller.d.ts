import { BusesService } from "./buses.service";
export declare class BusesController {
    private busesService;
    constructor(busesService: BusesService);
    getAll(): {
        id: number;
        name: string;
    }[];
}
