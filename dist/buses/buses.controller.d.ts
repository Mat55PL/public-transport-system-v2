import { BusesService } from "./buses.service";
import { CreateBusDTO } from "./DTOS/create-bus.dto";
import { EditBusDTO } from "./DTOS/edit-bus.dto";
export declare class BusesController {
    private busesService;
    constructor(busesService: BusesService);
    getAll(): {
        id: number;
        brand: string;
        model: string;
        plate: string;
    }[];
    getBusById(id: string): {
        id: number;
        brand: string;
        model: string;
        plate: string;
    };
    deleteBusById(id: string): void;
    addBus(body: CreateBusDTO): {
        id: number;
        brand: string;
        model: string;
        plate: string;
    }[];
    editBus(id: string, body: EditBusDTO): {
        id: number;
        brand: string;
        model: string;
        plate: string;
    };
}
