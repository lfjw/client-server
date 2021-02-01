# nestjs 服务端项目

## 创建文件

- service 又称 Provider 负责处理具体业务，数据库的增删改查

- controller 控制器，提供 api 接口，负责处理器、中转、验证简洁业务

- module 负责将`controller`和`service`连接起来

```bash
nest g [文件类型] [文件名] [文件目录（src目录下）]
nest g service user logical
nest g controller user logical
nest g module user logical
```

## 连接数据库

- 连接数据库的工具 sequelize

```sh
npm i sequelize mysql2 -S
```

## 原生语句操作 mysql

- 如果使用便捷方法，多了一步操作
