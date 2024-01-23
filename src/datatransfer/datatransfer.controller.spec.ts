import { Test, TestingModule } from '@nestjs/testing';
import { DatatransferController } from './datatransfer.controller';
import { DatatransferService } from './datatransfer.service';

describe('DatatransferController', () => {
  let controller: DatatransferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatatransferController],
      providers: [DatatransferService],
    }).compile();

    controller = module.get<DatatransferController>(DatatransferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
