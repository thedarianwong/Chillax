import { Controller, Post, Body } from '@nestjs/common';

import { JoinService } from './join.service';

@Controller('join')

export class JoinController {
    constructor(private readonly joinService: JoinService) {}

    @Post()
    addJoin(
        @Body('username') joinUsername: string, 
        @Body('email') joinEmail: string,
        @Body('message') joinMessage: string,  
    ) {
        const generatedId = this.joinService.insertProduct(
            joinUsername, 
            joinEmail,
            joinMessage
        ); 
        return {id: generatedId}; 
    }
}