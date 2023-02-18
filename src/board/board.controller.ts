import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardStatus } from './board-status.enum';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';
import { CreateBoardDto } from './pipes/board.create-dto';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}
  //service dependency injection
  // 접근제한자 private 를 사용하면 이 파라미터는 암묵적으로 프로퍼티로 설정이 됨

  // @Get()
  // getAllBoard(): Board[] {
  //   return this.boardService.getAllBoards();
  // }
  //
  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardService.createBoard(createBoardDto);
  }
  //
  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }
  //
  // @Delete('/:id')
  // deleteBoard(@Param('id') id: number): void {
  //   return this.boardService.deleteBoard(id);
  // }
  //
  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: number,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ): Board {
  //   return this.boardService.updateBoardStatus(id, status);
  // }
}
