import { IsString, IsInt, IsOptional, IsIn } from 'class-validator';

export class CreatePetDto {
  @IsString()
  name: string;

  @IsString()
  @IsIn(['mammal', 'bird', 'reptile', 'amphibian', 'fish', 'insect'])
  species: string;

  @IsInt()
  age: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  zooLocation?: string;
}
