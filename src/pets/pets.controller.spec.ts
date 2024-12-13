import { Test, TestingModule } from "@nestjs/testing";
import { PetsController } from "./pets.controller";
import { PetsService } from "./pets.service";
import { CreatePetDto } from "./dto/create-pet.dto";
import { UpdatePetDto } from "./dto/update-pet.dto";

describe("PetsController", () => {
  let controller: PetsController;
  let service: PetsService;
  let dto: CreatePetDto;
  let testPetId: string;
  let mockData = {
    name: "Homer simpson",
    species: "might be a pig",
    age: 46,
    description: "mmmmmm Dooooooonut",
    zooLocation: "Springfield",
  };
  let newPet: CreatePetDto = new CreatePetDto();

  const mockService = {
    create: jest.fn((dto) => ({ _id: "mockedId", ...dto })),
    update: jest.fn((id, dto) => ({ _id: id, ...dto })),
    remove: jest.fn((id) => ({ _id: id, deleted: true })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetsController],
      providers: [
        {
          provide: PetsService,
          useValue: mockService,
        },
      ],
    }).compile();

    service = module.get<PetsService>(PetsService);
    controller = module.get<PetsController>(PetsController);
  });

  // TEST 1
  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("create", () => {
    // TEST 2
    it("should create test pet", async () => {
      const dto: CreatePetDto = {
        name: mockData.name,
        age: mockData.age,
        description: mockData.description,
        species: mockData.species,
        zooLocation: mockData.zooLocation,
      };

      const result = await controller.create(dto);
      expect(service.create).toHaveBeenCalledWith(dto);
      expect(result).toEqual({ _id: "mockedId", ...dto });
    });
  });

  describe("update", () => {
    // TEST 3
    it("should update a pet property", async () => {
      const id = "mockedId";
      const dto: UpdatePetDto = { zooLocation: "Capital city" };

      const result = await controller.update(id, dto);
      expect(service.update).toHaveBeenCalledWith(id, dto);
      expect(result).toEqual({ _id: id, ...dto });
    });
  });

  describe("remove", () => {
    // TEST 4
    it("should remove a pet", async () => {
      const id = "mockedId";

      const result = await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(id);
      expect(result).toEqual({ _id: id, deleted: true });
    });
  });
});
