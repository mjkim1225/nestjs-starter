import { Users } from '../model/user.entity';
import { CustomRepository } from '../../config/custom-repository.decorator';
import { Repository } from 'typeorm';
import { AuthCredentialDto } from '../model/auth-credential.dto';

@CustomRepository(Users)
export class UserRepository extends Repository<Users> {
  async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { username, password } = authCredentialDto;
    const user = this.create({ username, password });
    await this.save(user);
  }
}
