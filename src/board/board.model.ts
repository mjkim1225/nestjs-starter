import { IsNotEmpty } from 'class-validator';

export interface Board {
  id: number;
  title: string;
  description: string;
  status: BoardStatus; //공개글 비공개글
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

/**
 * DTO 목록
 */
export class CreateBoardDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
