import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from "@nestjs/common";
import { PetsService } from "./pets.service";
import { CreatePetDto } from "./dto/create-pet.dto";
import { UpdatePetDto } from "./dto/update-pet.dto";
import { Types } from "mongoose";

@Controller("pets")
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  async create(@Body() createPetDto: CreatePetDto) {
    return await this.petsService.create(createPetDto);
  }

  @Get()
  findAll() {
    return this.petsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    if (Types.ObjectId.isValid(id)) {
      return this.petsService.findOne(id);
    }
    throw new NotFoundException("Pet not found!");
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() updatePetDto: UpdatePetDto) {
    return await this.petsService.update(id, updatePetDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.petsService.remove(id);
  }

  @Post("test")
  async runTests() {
    console.log("runTests()");
    console.log("createPet()");
    // this.testService.runTests();
  }
}
