import { CreatePetDto } from "../dto/create-pet.dto";
import { UpdatePetDto } from "../dto/update-pet.dto";

export type TPet = CreatePetDto | UpdatePetDto;