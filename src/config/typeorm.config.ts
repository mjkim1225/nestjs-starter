import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Board } from '../board/model/board.entity';
import { Users } from '../auth/model/user.entity';
import * as config from 'config';
const dbConfig = config.get('db');

export const typeormConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  entities: [Board, Users],
  synchronize: dbConfig.synchronize, //insert 한 데이터가 삭제되진 않는다.
};
