import { Test, TestingModule } from "@nestjs/testing";
import { PetsService } from "./pets.service";
import { getModelToken } from "@nestjs/mongoose";
import { Pet } from "./entities/pet.entity";

describe("PetsService", () => {
  let service: PetsService;
  const mockPet = {
    name: "Leo",
    species: "mammal",
    age: 5,
    description: "A friendly lion.",
    zooLocation: "Savannah Enclosure",
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PetsService,
        { provide: getModelToken(Pet.name), useValue: mockPet },
      ],
    }).compile();

    service = module.get<PetsService>(PetsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
