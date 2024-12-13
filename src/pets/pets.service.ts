import { Injectable } from "@nestjs/common";
import { CreatePetDto } from "./dto/create-pet.dto";
import { UpdatePetDto } from "./dto/update-pet.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Pet } from "./entities/pet.entity";
import { Model } from "mongoose";
import { TPet } from "./types/pet.type";

@Injectable()
export class PetsService {
  private readonly logPrefix: string = "[PetsService] ";
  constructor(@InjectModel(Pet.name) private readonly petModel: Model<Pet>) {}

  async create(createPetDto: TPet) {
    const newPet = new this.petModel(createPetDto);
    try {
      return await newPet.save();
    } catch (e) {
      console.log(e.error);
    }
  }

  async findAll() {
    return this.petModel.find().exec();
  }

  async findOne(id: string) {
    return await this.petModel.findById(id).exec();
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    console.log(this.logPrefix, "update(), ", id, updatePetDto);
    return await this.petModel
      .findOneAndUpdate({ _id: id }, { $set: updatePetDto }, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.petModel.findByIdAndDelete(id);
  }
}
