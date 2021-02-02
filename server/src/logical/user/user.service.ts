import { Injectable } from '@nestjs/common';
import * as Sequelize from 'sequelize';
import sequelize from '../../database/sequelize';
import { encryptPassword, makeSalt } from '../../utils/cryptogram';
import { User } from '../../typings';
import { RegisterInfoDTO } from './dto/user.dto';
@Injectable()
export class UserService {
  /**
   * 查询是否有该用户
   * @param username 用户名
   */
  async findOne(username: string) {
    const sql = ` 
      SELECT 
        id, username, password, passwd_salt 
      FROM 
        users 
      WHERE 
        username = '${username}'`;
    try {
      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT, // 查询方式
        raw: true, // 是否使用数组组装的方式展示结果
        logging: false,
      });
      return res[0] as User;
    } catch (error) {
      console.log(error);
      return void 0;
    }
  }
  /**
   * 注册用户
   * @param requestBody
   */
  async register(requestBody: RegisterInfoDTO) {
    const user = await this.findOne(requestBody.username);
    if (user) {
      return { code: 400, msg: '用户已存在~' };
    }
    const salt = makeSalt();
    const hasPwd = encryptPassword(requestBody.password, salt);
    const registerSql = `
      INSERT INTO users
        ( username, password, passwd_salt,  last_login, create_time, status, email, phone, gender, birthday, address)
      VALUES
        ('${requestBody.username}','${hasPwd}', '${salt}', '${requestBody.last_login}', '${requestBody.create_time}',1,'${requestBody.email}','${requestBody.phone}',${requestBody.gender},'${requestBody.birthday}','${requestBody.address}')`;

    try {
      await sequelize.query(registerSql, { logging: false });
      return { code: 200, msg: 'success' };
    } catch (error) {
      console.log(error);
      return { code: 503, msg: `Service error ${error}` };
    }
  }
}
