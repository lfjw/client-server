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

# 系统管理
nest g service system-management logical
nest g controller system-management logical
nest g module system-management logical

# 字典管理
nest g service dictionary-management logical/system-management
nest g controller dictionary-management logical/system-management
nest g module dictionary-management logical/system-management
```

## 连接数据库

- 连接数据库的工具 sequelize

```sh
npm i sequelize mysql2 -S
```

## 原生语句操作 mysql

- 如果使用便捷方法，多了一步操作

## 守卫（验证 TOKEN）

## 管道

```sh
npm i class-validator class-transformer -S
```

`ValidationPipe` 是 Nest.js 自带的三个开箱即用的管道之一（另外两个是 `ParseIntPipe` 和 `ParseUUIDPipe`，现在还用不到）

管道和拦截器有点像，都是在数据传输过程中的“关卡”，只不过各司其职。

管道有两个类型:

- 转换：管道将输入数据转换为所需的数据输出；
- 验证：对输入数据进行验证，如果验证成功继续传递，验证失败则抛出异常；
