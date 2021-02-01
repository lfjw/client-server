export interface User {
  id: number;
  username: string; // 用户名
  password: string; // 密码
  passwd_salt: string; // 密钥
  status: number; // 状态
  email: string; // 邮箱
  phone: string; // 手机号
  gender: string; // 性别
  birthday: Date; // 生日
  last_login: Date; // 上次登录时间
  create_time: Date; //  创建时间
  address?: string; // 地址
}
