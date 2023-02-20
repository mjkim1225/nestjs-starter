import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { AppLoggerMiddleware } from './config/app-logger.middleware';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), BoardModule, AuthModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
