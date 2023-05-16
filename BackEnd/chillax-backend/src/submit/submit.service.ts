import { Injectable } from '@nestjs/common';

import { Submit } from './submit.model';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable() 
export class SubmitService {
    submit: Submit[] = [];
    constructor(private readonly mailerService: MailerService) {}

    // Passing user inputs and Sending a msg from user email address

    // I will try testing with your email address, but sorry it does not work yet
    sendMail(name: string, email: string, msg: string) {

        console.log(name, email, msg); 

        this.mailerService.sendMail({
            to: 'kasugaiyuta19980519@gmail.com',
            from: 'thedarianwong@gmail.com',
            subject: 'Test Message From ' + name,
            // text: msg, 
            html: msg,
        })
    }
}



