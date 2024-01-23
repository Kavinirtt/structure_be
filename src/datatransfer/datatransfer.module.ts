import { Module } from '@nestjs/common';
import { DatatransferService } from './datatransfer.service';
import { DatatransferController } from './datatransfer.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Datatransfer } from './entities/datatransfer.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env'
    }),
    TypeOrmModule.forFeature([
      Datatransfer,
      ]),
     
  ],
  controllers: [DatatransferController],
  providers: [DatatransferService],
})

export class DatatransferModule {

}
