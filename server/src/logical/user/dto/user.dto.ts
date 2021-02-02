import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterInfoDTO {
  readonly id?: number;

  @IsNotEmpty({ message: '用户名不能为空' })
  @IsString({ message: '真实姓名必须是 String 类型' })
  readonly username: string; // 用户名

  @IsNotEmpty({ message: '密码不能为空' })
  readonly password: string; // 密码

  readonly passwd_salt: string; // 密钥
  readonly status: number; // 状态

  @IsNotEmpty({ message: '邮箱不能为空' })
  readonly email: string; // 邮箱

  @IsNotEmpty({ message: '手机号不能为空' })
  readonly phone: string; // 手机号

  @IsNotEmpty({ message: '性别不能为空' })
  readonly gender: string; // 性别

  @IsNotEmpty({ message: '生日不能为空' })
  readonly birthday: Date; // 生日

  readonly last_login: Date; // 上次登录时间
  readonly create_time: Date; //  创建时间
  readonly address?: string; // 地址
}
