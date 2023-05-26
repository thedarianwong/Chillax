import { Controller, Post, Body, Get } from '@nestjs/common';
import { SubmitService } from './submit.service';

interface SubmitData {
  username: string;
  email: string;
  message: string;
}

@Controller('submit')
export class SubmitController {
  constructor(private readonly submitService: SubmitService) {}

  @Post()
  addSubmit(@Body() submitData: SubmitData) {
    const { username, email, message } = submitData;
    console.log(username, email, message);

    return this.submitService.sendMail(username, email, message);
  }

  @Get()
  sendMail(@Body() submitData: SubmitData) {
    const { username, email, message } = submitData;
    return this.submitService.sendMail(username, email, message);
  }
}
