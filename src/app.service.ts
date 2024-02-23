import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class AppService {
  constructor(private userRepository: UserRepository) {}

  async getUsers() {
    const users = await this.userRepository.findMany();

    return users;
  }
}
