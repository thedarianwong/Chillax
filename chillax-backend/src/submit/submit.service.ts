import { Injectable } from '@nestjs/common';
import { Submit } from './submit.model';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class SubmitService {
  submit: Submit[] = [];

  constructor(private readonly mailerService: MailerService) {}

  sendMail(name: string, email: string, msg: string) {
    console.log(name, email, msg);

    // Store the submit data
    const submitData: Submit = {
      username: name,
      email,
      message: msg,
    };
    this.submit.push(submitData);

    // Send the email
    this.mailerService.sendMail({
      from: 'kasugaiyuta19980519@gmail.com',
      to: 'thedarianwong@gmail.com',
      subject: 'Test Message From ' + name,
      html: msg,
    });
  }
}
