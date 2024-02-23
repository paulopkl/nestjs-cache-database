import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRepository } from './repositories/user.repository';
import { PrismaUserRepository } from './repositories/prisma/prisma-user.repository';
import { PrismaService } from './config/prisma';
import { RedisUserRepository } from './repositories/cache/redis-user.repository';
import { RedisService } from './config/redis';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    RedisService,
    PrismaUserRepository,
    {
      provide: UserRepository,
      // useClass: PrismaUserRepository
      useClass: RedisUserRepository
    }
  ],
})
export class AppModule {}
