import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const role = this.reflector.get('role', context.getHandler());
    console.log("🚀 ~ file: role.guard.ts ~ line 13 ~ RoleGuard ~ role", role)
    // if (!role) {
    //   return true;
    // }
    const request = context.switchToHttp().getRequest();
    console.log("🚀 ~ file: role.guard.ts ~ line 18 ~ RoleGuard ~ request", request)
    const user = request.user;
    return true // user.role == role;
  }
}
