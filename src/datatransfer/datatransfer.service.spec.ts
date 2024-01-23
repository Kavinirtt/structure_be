import { Test, TestingModule } from '@nestjs/testing';
import { DatatransferService } from './datatransfer.service';

describe('DatatransferService', () => {
  let service: DatatransferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatatransferService],
    }).compile();

    service = module.get<DatatransferService>(DatatransferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
