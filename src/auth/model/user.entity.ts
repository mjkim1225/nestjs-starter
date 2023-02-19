import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Board } from '../../board/model/board.entity';

@Entity()
@Unique(['username']) //username 이 unique해야함. 같은 값을 insert할 경우 예외를 던짐
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => Board, (board) => board.user, { eager: true })
  boards: Board[];
}
