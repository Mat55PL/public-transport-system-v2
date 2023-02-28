import { Controller, Get } from "@nestjs/common";
import { BusesService } from "./buses.service";


@Controller('buses')
export class BusesController {
    constructor(private busesService: BusesService) { }
    @Get()
    getAll() {
        return this.busesService.getAll();
    }
}