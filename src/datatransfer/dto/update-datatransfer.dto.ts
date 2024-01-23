import { PartialType } from '@nestjs/mapped-types';
import { CreateDatatransferDto } from './create-datatransfer.dto';

export class UpdateDatatransferDto extends PartialType(CreateDatatransferDto) {}
