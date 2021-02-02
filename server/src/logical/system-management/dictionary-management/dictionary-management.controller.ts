import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ListParams } from 'src/typings/system-management/dictionary-management';
import { DictionaryManagementService } from './dictionary-management.service';
import { RbacGuard } from 'src/guards/rbac.guard';
// 系统管理/字典管理
@Controller('system-management/dictionary-management')
export class DictionaryManagementController {
  constructor(
    private readonly dictionaryManagementService: DictionaryManagementService,
  ) {}
  @UseGuards(new RbacGuard(1001))
  @Post('add')
  add() {
    this.dictionaryManagementService.add();
    return { code: 1 };
  }
  @UseGuards(new RbacGuard(1002))
  @Post('remove')
  remove() {
    this.dictionaryManagementService.remove();
    return { code: 1 };
  }
  @UseGuards(new RbacGuard(1003))
  @Post('update')
  update() {
    this.dictionaryManagementService.update();
    return { code: 1 };
  }

  @UseGuards(new RbacGuard(1000))
  @UseGuards(AuthGuard('jwt'))
  @Get('list')
  async list(
    @Query()
    params: ListParams,
  ) {
    const res = await this.dictionaryManagementService.list(params);
    return { code: 200, msg: 'success', data: res };
  }
}
