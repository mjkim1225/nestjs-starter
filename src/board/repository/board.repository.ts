import { Repository } from 'typeorm';
import { Board } from '../model/board.entity';
import { CustomRepository } from '../../config/custom-repository.decorator';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {}
