import { Controller, Post, Body, Get} from '@nestjs/common';
import { SubmitService } from './submit.service';

@Controller('submit')
export class SubmitController {
    constructor(private readonly submitService: SubmitService) {}

    @Post()
    addSubmit(
        @Body('username') submitUsername: string, 
        @Body('email') submitEmail: string,
        @Body('message') submitMessage: string,
    ) {
        // const generatedId = this.submitService.insertProduction(
        //     submitUsername, 
        //     submitEmail, 
        //     submitMessage
        // ); 

        return this.submitService.sendMail(submitUsername, submitEmail, submitMessage); 
    }

    // @Get()
    // sendMail(name: string, email: string, msg: string) {
    //     return this.submitService.sendMail(name, email, msg); 
    // }
}