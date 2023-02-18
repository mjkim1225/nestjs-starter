import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Board } from '../board/board.entity';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 15432,
  username: 'nestjs',
  password: 'nestjs',
  database: 'nestjs',
  entities: [Board],
  synchronize: true,
};
