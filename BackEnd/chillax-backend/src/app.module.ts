import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JoinModule } from './join/join.module';
import { SubmitModule } from './submit/submit.module';

@Module({
  // ProductsModule should be in the imports below
  imports: [JoinModule, SubmitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// App Password for my gmail
// rmflxbbvcjtbesiz