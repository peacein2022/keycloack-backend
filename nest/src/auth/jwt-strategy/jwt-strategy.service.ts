import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      algorithms:["RS256"],
      secretOrKey: configService.get('JWT_SECRET'),
    });
    console.log('configService.get( JWT_SECRET ) :>> ', configService.get('JWT_SECRET'));
  }

  async validate(payload) {
    return payload; //delimito as informacoes do user
  }
}
