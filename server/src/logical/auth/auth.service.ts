import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { encryptPassword } from '../../utils/cryptogram';
import { User } from 'src/typings';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) { }
  // 验证逻辑
  async validateUser(username, password) {
    console.log('JWT验证 - Step 2: 校验用户信息');
    const user = await this.usersService.findOne(username);
    if (user) {
      const hashedPassword = user.password;
      const salt = user.passwd_salt;
      // 通过密码盐，加密传参，再与数据库里的比较，判断是否相等
      const hashPassword = encryptPassword(password, salt);
      if (hashedPassword === hashPassword) {
        return { isUser: true, user };
      } else {
        return { isUser: false };
      }
    } else {
      return { isUser: false };
    }
  }
  // JWT验证 - Step 3: 处理 jwt 签证
  async certificate(user: User) {
    const payload = { username: user.username, id: user.id };
    console.log('JWT验证 - Step 3: 处理 jwt 签证');
    try {
      const token = await this.jwtService.sign(payload);
      return { isResult: true, data: { token, user } };
    } catch (error) {
      return { isResult: false };
    }
  }
}
