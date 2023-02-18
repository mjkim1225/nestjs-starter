import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CustomRepository } from '../config/custom-repository.decorator';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {}
