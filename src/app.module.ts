import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PetsModule } from "./pets/pets.module";
import { MongooseModule } from "@nestjs/mongoose";

const moduleConfig = {
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env"],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    PetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
};

@Module(moduleConfig)
export class AppModule {}
