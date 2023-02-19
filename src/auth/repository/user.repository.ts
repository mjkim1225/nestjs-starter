import { Users } from '../model/user.entity';
import { CustomRepository } from '../../config/custom-repository.decorator';
import { Repository } from 'typeorm';
import { AuthCredentialDto } from '../model/auth-credential.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@CustomRepository(Users)
export class UserRepository extends Repository<Users> {
  async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { username, password } = authCredentialDto;
    const user = this.create({ username, password });
    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Existing user name');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
