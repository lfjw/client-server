import { Body, Controller, HttpCode, Post, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { RegisterInfoDTO } from './dto/user.dto';
import { ValidationPipe } from 'src/pipe/validation.pipe';
import { User } from 'src/typings';
import { statusSuccess, statusError } from 'src/utils/statusType';

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
  @HttpCode(200)
  async login(@Body() body: User) {
    try {
      const authResult = await this.authService.validateUser(
        body.username,
        body.password,
      );
      if (authResult.isUser) {
        const a = await this.authService.certificate(authResult.user);
        if (a.isResult) {
          return statusSuccess({ data: a.data });
        } else {
          return statusError({ msg: '账号密码不正确～' });
        }
      }
      return statusError({ msg: '账号密码不正确～' });
    } catch (error) {
      return statusError({ msg: `Service error ${error}` });
    }
  }
}
