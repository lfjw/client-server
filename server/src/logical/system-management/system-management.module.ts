import { Module } from '@nestjs/common';
import { DictionaryManagementController } from './dictionary-management/dictionary-management.controller';
import { DictionaryManagementService } from './dictionary-management/dictionary-management.service';
import { DictionaryManagementModule } from './dictionary-management/dictionary-management.module';

@Module({
  controllers: [DictionaryManagementController],
  providers: [DictionaryManagementService],
  imports: [DictionaryManagementModule],
})
export class SystemManagementModule {}
