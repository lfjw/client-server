interface DBConfig {
  mysql: MysqlConfig;
}
interface MysqlConfig {
  port: number; // 数据库端口
  host: string; // 数据库地址
  user: string; // 用户名
  password: string; // 密码
  database: string; // 数据库名称
  connectionLimit: number; // 连接限制
}

const localConfig: DBConfig = {
  mysql: {
    port: 3308, // 数据库端口
    host: 'localhost', // 数据库地址
    user: 'root', // 用户名
    password: '123456', // 密码
    database: 'cms-dev', // 数据库名称
    connectionLimit: 10, // 连接限制
  },
};

//const productConfig = {};
// 本地运行是没有 process.env.NODE_ENV 的，借此来区分[开发环境]和[生产环境]
export const config = localConfig; //process.env.NODE_ENV ? productConfig : localConfig;
