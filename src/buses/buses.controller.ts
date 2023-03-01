import { Controller, Get, Param, Delete, HttpCode } from "@nestjs/common";
import { BusesService } from "./buses.service";

@Controller('buses')
export class BusesController {
    constructor(private busesService: BusesService) { }
    @Get()
    getAll() {
        return this.busesService.getAll();
    }

    @Get('/:id')
    getBusById(@Param('id') id: string) {
        return this.busesService.getById(parseInt(id));
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteBusById(@Param('id') id: string) {
        return this.busesService.delete(parseInt(id));
    }
}