import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JoinModule } from './join/join.module';

@Module({
  imports: [ProductsModule, JoinModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// App Paaword for my gmail
// rmflxbbvcjtbesiz