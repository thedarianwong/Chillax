import { Module } from '@nestjs/common'; 

import { SubmitController } from './submit.controller';
import { SubmitService } from './submit.service';

import { MailerModule } from '@nestjs-modules/mailer';

// Test with my email address
@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: 'smtp.gmail.com',
                port: 587,
                auth: {
                    user: 'kasugaiyuta19980519@gmail.com',
                    pass: 'rmflxbbvcjtbesiz'
                }
            }
        })
    ],
    controllers: [SubmitController], 
    providers: [SubmitService], 
})

export class SubmitModule {}