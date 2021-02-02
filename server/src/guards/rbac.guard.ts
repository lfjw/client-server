/**
 * 使用 Guard 守卫控制权限
 *
 */

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RbacGuard implements CanActivate {
  constructor(private readonly menu_id: number) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log(user, this.menu_id);
    // console.log(request, user, 'user ---权限-- role', this.role);
    return true;
  }
}
