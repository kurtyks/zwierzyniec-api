import { Module } from "@nestjs/common";
import { PetsService } from "./pets.service";
import { PetsController } from "./pets.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Pet, PetSchema } from "./entities/pet.entity";
import { TesterService } from "./tester/tester.service";
import { HttpModule, HttpService } from "@nestjs/axios";

@Module({
  controllers: [PetsController],
  providers: [PetsService, TesterService],
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }]),
  ],
})
export class PetsModule {}
