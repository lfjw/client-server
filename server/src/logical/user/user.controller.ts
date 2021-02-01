import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { User } from 'src/typings';

@Controller('user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UserService,
  ) {}
  @Post('register')
  findOne(@Body() body: any) {
    return this.usersService.register(body);
  }
  @Post('login')
  async login(@Body() body: User) {
    try {
      const authResult = await this.authService.validateUser(
        body.username,
        body.password,
      );
      if (authResult.code == 1) {
        return this.authService.certificate(authResult.user);
      }
      if (authResult.code == 2) {
        return { code: 600, msg: '账号密码不正确' };
      }
      return { code: 600, msg: '无此人' };
    } catch (error) {
      return { code: 503, msg: `Service error ${error}` };
    }
  }
}
