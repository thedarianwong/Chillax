import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { JoinModule } from './join/join.module';
import { DatabaseModule } from './database.module';
import { UsersModule } from './users/users.module';
import { ActivitiesModule } from './activities/activities.module';

@Module({
  imports: [ProductsModule, JoinModule, DatabaseModule, UsersModule, ActivitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
