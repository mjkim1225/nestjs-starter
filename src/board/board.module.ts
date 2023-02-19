import { Module } from '@nestjs/common';
import { BoardController } from './controller/board.controller';
import { BoardService } from './service/board.service';
import { BoardRepository } from './repository/board.repository';
import { TypeOrmExModule } from '../config/typerom-ex.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, TypeOrmExModule.forCustomRepository([BoardRepository])],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
