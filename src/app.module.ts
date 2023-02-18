import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), BoardModule],
})
export class AppModule {}
