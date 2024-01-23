import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Req, Res } from '@nestjs/common';
import { DatatransferService } from './datatransfer.service';
import { CreateDatatransferDto } from './dto/create-datatransfer.dto';
import { UpdateDatatransferDto } from './dto/update-datatransfer.dto';
import { Request,Response } from 'express';
import { get } from 'http';

@Controller('datatransfer')
export class DatatransferController {
  constructor(private readonly datatransferService: DatatransferService) {}

  @Post('sending')
  async create(@Req() req: Request, @Res() res: Response,@Body() data:CreateDatatransferDto ) {
    try {
      console.log(data)
      const user = await this.datatransferService.insert(data); 
      res.status(HttpStatus.OK).json({
        message: 'user insterted successfully',
        data: user,
      });
     }
     catch(error){
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Something went wrong',
      });

     }}
  @Get('receive') 
  async get(@Req() req: Request, @Res() res: Response) {
    try {
      const user = await this.datatransferService.receive(); 
      res.status(HttpStatus.OK).json({
        message: 'user recceived successfully',
        data: user,
      });
     }
     catch(error){
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Something went wrong',
      });

     }}

}