/**
 *
 * 校验参数
 *
 *
 * 备注：管道和拦截器有点像，都是在数据传输过程中的“关卡”，只不过各司其职。
 *      转换：管道将输入数据转换为所需的数据输出；
 *      验证：对输入数据进行验证，如果验证成功继续传递，验证失败则抛出异常；
 */

import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { Logger } from '../utils/log4js';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    if (!metadata.metatype || !this.toValidate(metadata)) {
      // 如果没有传入验证规则，则不验证，直接返回数据
      return value;
    }
    const object = plainToClass(metadata.metatype, value); // 将对象转换为 Class 来验证
    const errors = await validate(object);
    if (errors.length > 0) {
      const msg = Object.values(errors[0].constraints)[0]; // 只需要取第一个错误信息并返回即可
      Logger.error(`Validation failed: ${msg}`);
      throw new BadRequestException(`Validation failed: ${msg}`);
    }
    return value;
  }
  private toValidate(metadata: ArgumentMetadata): boolean {
    const types: Array<any> = [String, Boolean, Number, Array, Object];
    return !types.includes(metadata.metatype);
  }
}
