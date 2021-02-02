import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { RegisterInfoDTO } from './dto/user.dto';
import { ValidationPipe } from 'src/pipe/validation.pipe';
import { User } from 'src/typings';

@Controller('user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UserService,
  ) {}

  /**
   * 注册
   * @param body
   */
  @UsePipes(new ValidationPipe())
  @Post('register')
  register(@Body() body: RegisterInfoDTO) {
    return this.usersService.register(body);
  }

  /**
   * 登录
   * @param body
   */
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
