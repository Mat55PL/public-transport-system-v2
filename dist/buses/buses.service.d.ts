export declare class BusesService {
    constructor();
    getAll(): {
        id: number;
        name: string;
    }[];
    getById(id: number): {
        id: number;
        name: string;
    };
}
