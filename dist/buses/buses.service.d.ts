import { ConfigService } from "@nestjs/config";
export declare class BusesService {
    private configService;
    constructor(configService: ConfigService);
    getAll(): {
        id: number;
        brand: string;
        model: string;
        plate: string;
    }[];
    getById(id: number): {
        id: number;
        brand: string;
        model: string;
        plate: string;
    };
    add(brand: string, model: string, plate: string): {
        id: number;
        brand: string;
        model: string;
        plate: string;
    }[];
    delete(id: number): void;
    edit(id: number, brand: string, model: string, plate: string): {
        id: number;
        brand: string;
        model: string;
        plate: string;
    };
}
