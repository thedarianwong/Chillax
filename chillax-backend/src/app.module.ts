import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JoinModule } from './join/join.module';
import { SubmitModule } from './submit/submit.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    JoinModule,
    SubmitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// App Password for my gmail
// rmflxbbvcjtbesiz
