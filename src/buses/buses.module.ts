import { Module } from "@nestjs/common";
import { BusesController } from "./buses.controller";
import { BusesService } from "./buses.service";
import { ConfigModule } from "@nestjs/config";


@Module({
    imports: [ConfigModule],
    controllers: [BusesController],
    providers: [BusesService]
})
export class BusesModule { }
