import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../model/board-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  transform(value: any, metadata: ArgumentMetadata): any {
    // console.log(value); // inserted value
    // console.log(metadata); //{ metatype: [Function: String], type: 'body', data: 'status' }

    if (!this.isStatusValid(value.toUpperCase())) {
      throw new BadRequestException(` ${value} isn't valid status.`);
    }

    return value;
  }

  private isStatusValid(status: any): boolean {
    return this.StatusOptions.indexOf(status) !== -1;
  }
}
