import { Injectable } from '@nestjs/common';
import * as Sequelize from 'sequelize';
import sequelize from 'src/database/sequelize';
import { ListParams } from 'src/typings/system-management/dictionary-management';

@Injectable()
export class DictionaryManagementService {
  add() {
    return {};
  }
  remove() {
    return {};
  }
  update() {
    return {};
  }

  async list(params: ListParams) {
    const sql = `
      SELECT 
        id,dict_type_code,dict_type_name 
      FROM 
        dictionary 
      WHERE 
        dict_type_code = '${params.dict_type_code}' 
      OR 
        dict_type_name = '${params.dict_type_name}'`;
    try {
      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT,
        raw: true,
        logging: false,
      });
      return res[0];
    } catch (error) {
      return void 0;
    }
  }
}
