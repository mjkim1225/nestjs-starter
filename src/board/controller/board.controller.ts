import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardService } from '../service/board.service';
import { BoardStatus } from '../model/board-status.enum';
import { BoardStatusValidationPipe } from '../pipes/board-status-validation.pipe';
import { Board } from '../model/board.entity';
import { CreateBoardDto } from '../model/board.create-dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../auth/custom-decorator/get-user.decorator';
import { Users } from '../../auth/model/user.entity';

@Controller('board')
@UseGuards(AuthGuard())
export class BoardController {
  constructor(private boardService: BoardService) {}
  //service dependency injection
  // 접근제한자 private 를 사용하면 이 파라미터는 암묵적으로 프로퍼티로 설정이 됨

  @Get()
  getAllBoard(@GetUser() user: Users): Promise<Board[]> {
    return this.boardService.getAllBoards(user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    @Body() createBoardDto: CreateBoardDto,
    @GetUser() user: Users,
  ): Promise<Board> {
    return this.boardService.createBoard(createBoardDto, user);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Promise<Board> {
    return this.boardService.updateBoardStatus(id, status);
  }
}
