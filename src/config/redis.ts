import { Injectable } from "@nestjs/common";
import { Redis } from "ioredis";

@Injectable()
export class RedisService extends Redis {
    constructor() {
        super({
            host: "localhost",
            port: 6379,
            password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81"
        })

        super.on("error", (err) => {
            console.log("Error on Redis");
            console.log(err);
            
            process.exit(1)
        })
        
        super.on("connect", () => {
            console.log("Redis Connected!");
        })
    }
}