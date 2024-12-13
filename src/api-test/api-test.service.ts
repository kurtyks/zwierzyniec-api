// import { Inject, Injectable } from "@nestjs/common";
// import { PetsController } from "src/pets/pets.controller";
// import { PetsService } from "src/pets/pets.service";

// @Injectable()
// export class ApiTestService {
//   constructor() // private PetsController: PetsController,
//   // private PetsService: PetsService,
//   {}

//   private testPetId: string;

//   //   private PetsController = Inject(PetsController);

//   private readonly mockPet = {
//     name: "Test Pet",
//     species: "T1000",
//     age: 10000,
//     description: "I'll be back",
//     zooLocation: "Manhattan",
//   };

//   async createPet() {
//     console.log(`TESTS createPet()`);
//     const pet: any = await this.PetsController.create(this.mockPet).then(
//       (result: any) => {
//         console.log(`result: ${result}`);
//         console.assert(
//           result.name === this.mockPet.name,
//           `Invalid name: ${result.name}, should be: ${this.mockPet.name}`,
//         );
//         console.assert(
//           result.age === this.mockPet.age,
//           `Invalid age: ${result.age}, should be: ${this.mockPet.age}`,
//         );
//         console.assert(
//           result.description === this.mockPet.description,
//           `Invalid description: ${result.description}, should be: ${this.mockPet.description}`,
//         );
//         console.assert(
//           result.species === this.mockPet.species,
//           `Invalid species: ${result.species}, should be ${this.mockPet.species}`,
//         );
//         console.assert(
//           result.zooLocation === this.mockPet.zooLocation,
//           `Invalid zooLocation: ${result.zooLocation}, should be: ${this.mockPet.zooLocation}`,
//         );
//       },
//     );
//     this.testPetId = pet._id;
//   }

//   async updatePet() {
//     console.log(`[TEST] updatePet`);
//     this.PetsController.update(this.testPetId, { name: "T10000" });
//     this.PetsService.findOne(this.testPetId).then((pet) => {
//       console.assert(
//         pet.name === "T10000",
//         `Invalid pet.name on update, is: ${pet.name}, should be: T10000. What a mess..`,
//       );
//     });
//   }

//   async getPetList() {
//     console.log(`[TEST] getPetList`);
//     const list = await this.PetsController.findAll();
//     console.assert(list.length === 0, `No pets found!`);
//     console.assert(
//       list.filter((item) => item._id === this.testPetId),
//       `Test pet not found on all pets list!`,
//     );
//   }

//   async deletePet() {
//     console.log(`[TEST] deletePet`);
//     try {
//       await this.PetsController.remove(this.testPetId);
//     } catch (err) {
//       console.error(err);
//     }
//     console.assert(
//       !this.PetsController.findOne(this.testPetId),
//       `Test pet was not deleted from db!`,
//     );
//   }

//   runAllTests() {}
// }
