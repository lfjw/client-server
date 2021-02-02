import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './logical/user/user.controller';
import { UserModule } from './logical/user/user.module';
import { AuthModule } from './logical/auth/auth.module';
import { SystemManagementService } from './logical/system-management/system-management.service';
import { SystemManagementController } from './logical/system-management/system-management.controller';
import { SystemManagementModule } from './logical/system-management/system-management.module';

@Module({
  // 导出此模块所需提供程序的导入模块的可选列表
  imports: [UserModule, AuthModule, SystemManagementModule],
  // 此模块中定义的必须实例化的控制器的可选列表
  controllers: [AppController, UserController, SystemManagementController],
  // 将由嵌套注入器实例化并且至少可以在该模块中共享的提供程序的可选列表
  providers: [AppService, SystemManagementService],
})
export class AppModule {}
