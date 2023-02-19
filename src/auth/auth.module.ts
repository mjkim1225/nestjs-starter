import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { TypeOrmExModule } from '../config/typerom-ex.module';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
