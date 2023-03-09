import { MaxLength } from "class-validator";

export class CreateBusDTO {
    @MaxLength(50)
    brand: string;
    @MaxLength(50)
    model: string;
    @MaxLength(8)
    // @MaxLength(8, { message: 'The plate must be 8 characters long' })
    plate: string;
}