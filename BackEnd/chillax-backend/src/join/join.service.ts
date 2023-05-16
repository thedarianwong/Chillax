import { Injectable } from '@nestjs/common';

import { Join } from './join.model'; 

@Injectable() 
export class JoinService {
    join: Join[] = []; 

    insertProduct(name: string, email: string, msg: string) {

        console.log(name, email, msg); 

        // Test Statement
        if (name == "Yuta") {
            const newJoin = new Join(name, email, msg); 
            this.join.push(newJoin); 
            return "This username is Yuta"; 

        } else if (msg == "Error") {
            const newJoin = new Join(name, email, msg); 
            this.join.push(newJoin); 
            return "This is a message";

        } else {
            const newJoin = new Join(name, email, msg); 
            this.join.push(newJoin); 
            return "This is else";
        }


        // const newJoin = new Join(name, email, msg); 
        // this.join.push(newJoin); 
        // return "Hello, this is a test."; 
    }
}