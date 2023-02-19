import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { TypeOrmExModule } from '../config/typerom-ex.module';
import { UserRepository } from './repository/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret-key', // secret key
      signOptions: {
        expiresIn: 60 * 60, // 유효 시간
      },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmExModule.forCustomRepository([UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], //JwtStrategy를 이 Auth 모듈안에서 사용할 수 있도록 등록
  exports: [JwtStrategy, PassportModule], //다른 모듈에서 사용할 수 있도록 등록
})
export class AuthModule {}
