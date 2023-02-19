import { User } from '../model/user.entity';
import { CustomRepository } from '../../config/custom-repository.decorator';
import { Repository } from 'typeorm';

@CustomRepository(User)
export class UserRepository extends Repository<User> {}
