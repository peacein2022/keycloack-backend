import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common'; 
 import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    HttpModule,
    JwtModule.register({
      secret: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAg3MvHaIZuVph3yt416tiMDuMLuDJQWWoyhGoszc3nbdj3POV7o/fB2Yhq99fU1lF4Cuegss5/ryW5ddCF9oXaKAs9QR+0/mLaVymbKwqef06J/nX4h+yrPZdbUd2IBwEckkrmMOnzeSxS5vi6yStygX3DNqEfE899gM/jvQSBrUZXy8OoW7LDqSB06r4cYlh4nO7+7cFqz+TkRPHjcbW+X5ssXcnUKxqP90JQqphbIuv7GdS05Y5ixBVsiKIukToDC6V9YPIBRG/eree9h80IqSmFn1F+hA5dun8KUhw+Cz8Nf+2jqT11o7+c1m5rQZL5+0Pf/pbHer1P/amo42iVwIDAQAB\n-----END PUBLIC KEY-----",
      signOptions: {
        expiresIn: '60s',
      },
    }),
    ConfigModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService],
})
export class AuthModule {}
