import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';
import { User } from 'src/entities/user.entity';
import { RedisService } from 'src/config/redis';
import { PrismaService } from 'src/config/prisma';
import { PrismaUserRepository } from '../prisma/prisma-user.repository';

@Injectable()
export class RedisUserRepository implements UserRepository {
  constructor(private redis: RedisService, private prismaUserRepository: PrismaUserRepository) {}

  async findMany(): Promise<User[]> {
    const cachedUsers = await this.redis.get('users');

    if (cachedUsers) {
      console.log('\x1b[33m%s\x1b[0m', 'From Cache');

      return JSON.parse(cachedUsers);
    }
    // if (!cachedUsers) {
    //   const users = await this.prisma.user.findMany();

    //   return users;
    // }

    const users = await this.prismaUserRepository.findMany();
    console.log('\x1b[36m%s\x1b[0m', 'From Database');

    await this.redis.set('users', JSON.stringify(users), 'EX', 15);

    return users;
  }
}
