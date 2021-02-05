/**
 * 使用 Guard 守卫控制权限
 *
 */

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import sequelize from 'src/database/sequelize';
import * as Sequelize from 'sequelize';
import { ValidateJWTReturns } from 'src/logical/auth/auth-utils/jwt.strategy';

interface GetResourcesResponse {
  user_id: string;
  key: string;
  name: string;
  roles_id: string;
}
type GetResources = GetResourcesResponse | undefined;

@Injectable()
export class RbacGuard implements CanActivate {
  // menu_id 权限标识
  constructor(private readonly menu_id: number) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return new Promise(async (resolve, reject) => {
      const request = context.switchToHttp().getRequest();
      const user: ValidateJWTReturns = request.user;
      try {
        const res = await this.getResources(user.id);
        if (!res) {
          reject(false);
        }
        const key_list = res.key.split(',');
        const n = key_list.find((value) => Number(value) === this.menu_id);
        if (n) {
          resolve(true);
        } else {
          resolve(false);
        }
      } catch (error) {
        reject(false);
      }
    });
  }

  /**
   * 通过用户id获取到他的角色，并通过角色获取到该角色的所有权限
   * @param id 用户id
   */
  private async getResources(id: number) {
    const sql = `
      select user_role.user_id,resources.key,roles.name,roles.id roles_id
      from user_role
      left join users
      on users.id = user_role.user_id
      left join roles
      on roles.id = user_role.role_id
      LEFT JOIN role_resource
      ON role_resource.role_id = roles.id
      LEFT JOIN resources
      ON resources.id = role_resource.resource_id
      WHERE users.id = ${id}
    `;
    try {
      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT, // 查询方式
        raw: true, // 是否使用数组组装的方式展示结果
        logging: false,
      });
      return res[0] as GetResources;
    } catch (error) {
      return void 0;
    }
  }
}
