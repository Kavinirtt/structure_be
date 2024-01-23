import { Injectable } from '@nestjs/common';
import { CreateDatatransferDto } from './dto/create-datatransfer.dto';
import { UpdateDatatransferDto } from './dto/update-datatransfer.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Datatransfer } from './entities/datatransfer.entity';


@Injectable()
export class DatatransferService {
  constructor(
    @InjectRepository(Datatransfer)
    private repo: Repository<Datatransfer>,)
    {}
    async insert(data:CreateDatatransferDto){
      // const DataTransfer=new Datatransfer()
      // DataTransfer.name=data.name
      data['createdBy']=1;
      console.log(data)
      return await this.repo.save(data)
    }
    async receive(){
      // const DataTransfer=new Datatransfer()
      // DataTransfer.name=data.name
      return await this.repo.find({
        select:["id","name"]
      })
    }
}
