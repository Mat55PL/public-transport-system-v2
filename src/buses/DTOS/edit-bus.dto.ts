import { IsString } from "class-validator";

export class EditBusDTO {
    brand: string;
    model: string;
    plate: string;
}