import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';


@Injectable()
export class AppService {
  // constructor(private readonly mailerService: MailerService) {}

  // sendMail(): void {
  //   this.mailerService.sendMail({
  //     to: 'kasugaiyuta19980519@gmail.com',
  //     from: 'kasugaiyuta19980519@gmail.com',
  //     subject: 'Test for sending meg',
  //     text: 'Hello World', 
  //     html: '<b>Welcome</b>'
  //   }); 
  // }

  getHello(): string {
    return 'Hello World!';
  }
}
