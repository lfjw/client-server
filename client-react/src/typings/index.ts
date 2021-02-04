export interface RegisterParams {
  username: string; // 用户名
  password: string; // 密码
  email: string; // 邮箱
  phone: string | number; // 手机号
  gender: string | number; // 性别
  birthday: Date | string; // 生日
  last_login?: Date | string; // 最后登录时间
  create_time?: Date | string; // 创建时间
  address: string;// 地址
}

export interface LoginParams {
  username: string | number;
  password: string;
}

export interface SystemResponse<T = any> {
  code: boolean;
  data: T;
  msg: string;
}
