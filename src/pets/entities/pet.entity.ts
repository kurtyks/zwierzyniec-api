import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'pet' })
export class Pet extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: ['mammal', 'bird', 'reptile', 'amphibian', 'fish', 'insect'] })
  species: string;

  @Prop({ required: true, type: Number, min: 0 })
  age: number;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: String })
  zooLocation?: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
