import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from '../model/board-status.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from '../repository/board.repository';
import { Board } from '../model/board.entity';
import { CreateBoardDto } from '../model/board.create-dto';
import { Users } from '../../auth/model/user.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException(`Can't find board with id ${id}.`);
    }
    return found;
  }

  async createBoard(
    createBoardDto: CreateBoardDto,
    user: Users,
  ): Promise<Board> {
    const { title, description } = createBoardDto;
    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user,
    });

    await this.boardRepository.save(board);
    return board;
  }

  async getAllBoards(user: Users): Promise<Board[]> {
    const query = this.boardRepository.createQueryBuilder('board');
    query.where('board.userId = :userId', { userId: user.id });
    const board = await query.getMany();

    return board;
  }

  async deleteBoard(id: number, user: Users): Promise<void> {
    const deleteQuery = this.boardRepository
      .createQueryBuilder('board')
      .delete()
      .where('userId = :userId', { userId: user.id })
      .andWhere('id = :id', { id: id });
    const result = await deleteQuery.execute();
    // console.log(result); //-> DeleteResult { raw: [], affected: 1 }
    // remove: 데이터가 있는지 확인 후 지워야하고, delete: 데이터가 없으면 affected:0, 있으면 1
    if (result.affected === 0) {
      throw new NotFoundException(`Can't find board with id ${id}.`); //nest js 내부 exception
    }
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }
}
