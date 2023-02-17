import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus, CreateBoardDto } from './board.model';

@Injectable()
export class BoardService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const { title, description } = createBoardDto;
    const board = {
      id: this.boards.length,
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  getBoardById(id: number): Board {
    const found = this.boards.find((board) => board.id == id);
    if (!found) {
      throw new NotFoundException(`Can't find board with id ${id}.`); //nest js 내부 exception
    }
    return found;
  }

  deleteBoard(id: number): void {
    this.boards = this.boards.filter((board) => board.id !== id); //???????????????????????
  }

  updateBoardStatus(id: number, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
