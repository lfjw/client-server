import { Sequelize } from 'sequelize';
import { config } from '../config/db';

const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.user,
  config.mysql.password,
  {
    host: config.mysql.host,
    port: config.mysql.port,
    dialect: 'mysql',
    pool: {
      max: config.mysql.connectionLimit, // 连接池中最大连接数量
      min: 0, // 连接池中最小连接数量
      acquire: 30000,
      idle: 10000, // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    },
    timezone: '+08:00', // 东八时区
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log('mysql success');
  })
  .catch((error) => {
    console.error(error);
    throw new Error(error);
  });
export default sequelize;
