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
import { ApiBody, ApiOperation, ApiParam } from "@nestjs/swagger";

@Controller("pets")
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  @ApiOperation({ summary: "Create new pet" })
  @ApiBody({
    type: CreatePetDto,
  })
  async create(@Body() createPetDto: CreatePetDto) {
    return await this.petsService.create(createPetDto);
  }

  @Get()
  @ApiOperation({ summary: "Returns list of all pets in collection" })
  findAll() {
    return this.petsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get pet by _id" })
  findOne(@Param("id") id: string) {
    if (Types.ObjectId.isValid(id)) {
      return this.petsService.findOne(id);
    }
    throw new NotFoundException("Pet not found!");
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update pet by id" })
  @ApiBody({
    type: UpdatePetDto,
  })
  async update(@Param("id") id: string, @Body() updatePetDto: UpdatePetDto) {
    return await this.petsService.update(id, updatePetDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete pet by _id" })
  remove(@Param("id") id: string) {
    return this.petsService.remove(id);
  }
}
