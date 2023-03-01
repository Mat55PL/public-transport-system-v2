import { IsString } from "class-validator";

export class CreateBusDTO {
    brand: string;
    model: string;
    plate: string;
}