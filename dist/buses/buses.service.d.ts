export declare class BusesService {
    getAll(): {
        id: number;
        brand: string;
    }[];
    getById(id: number): {
        id: number;
        brand: string;
    };
    add(brand: string): void;
    delete(id: number): void;
}
