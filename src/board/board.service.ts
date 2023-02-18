import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { CreateBoardDto } from './pipes/board.create-dto';

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

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;
    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.boardRepository.save(board);
    return board;
  }
  //
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  //

  //   this.boards.push(board);
  //   return board;
  // }
  //
  // getBoardById(id: number): Board {
  //   const found = this.boards.find((board) => board.id == id);
  //   if (!found) {
  //     throw new NotFoundException(`Can't find board with id ${id}.`); //nest js 내부 exception
  //   }
  //   return found;
  // }
  //
  // deleteBoard(id: number): void {
  //   this.boards = this.boards.filter((board) => board.id !== id); //???????????????????????
  // }
  //
  // updateBoardStatus(id: number, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
