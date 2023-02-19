import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Users } from '../../auth/model/user.entity';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne((type) => Users, (user) => user.boards, { eager: false })
  user: Users;
}
