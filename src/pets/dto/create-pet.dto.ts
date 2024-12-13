import { ApiProperty, ApiSchema } from "@nestjs/swagger";
import { IsString, IsInt, IsOptional, IsIn } from "class-validator";

@ApiSchema()
export class CreatePetDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    required: true,
    enum: ["mammal", "bird", "reptile", "amphibian", "fish", "insect"],
  })
  @IsString()
  @IsIn(["mammal", "bird", "reptile", "amphibian", "fish", "insect"])
  species: string;

  @ApiProperty({ type: Number })
  @IsInt()
  age: number;

  @ApiProperty({ type: String, nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ type: String, nullable: true })
  @IsString()
  @IsOptional()
  zooLocation?: string;
}
