import { Controller, Get, Param, Delete, HttpCode, Post, Body, Patch } from "@nestjs/common";
import { BusesService } from "./buses.service";
import { CreateBusDTO } from "./DTOS/create-bus.dto";
import { EditBusDTO } from "./DTOS/edit-bus.dto";


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

    @Post()
    addBus(@Body() body: CreateBusDTO) {
        return this.busesService.add(body.brand, body.model, body.plate);
    }

    @Patch('/:id')
    editBus(@Param('id') id: string, @Body() body: EditBusDTO) {
        return this.busesService.edit(parseInt(id), body.brand, body.model, body.plate);
    }
}