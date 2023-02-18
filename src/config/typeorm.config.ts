import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Board } from '../board/model/board.entity';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 15432,
  username: 'nestjs',
  password: 'nestjs',
  database: 'nestjs',
  entities: [Board],
  synchronize: true, //insert 한 데이터가 삭제되진 않는다.
};
