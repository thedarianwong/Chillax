// src/database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/your-database-name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
})
export class DatabaseModule {}
