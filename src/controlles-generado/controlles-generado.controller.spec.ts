import { Test, TestingModule } from '@nestjs/testing';
import { ControllesGeneradoController } from './controlles-generado.controller';

describe('ControllesGeneradoController', () => {
  let controller: ControllesGeneradoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllesGeneradoController],
    }).compile();

    controller = module.get<ControllesGeneradoController>(ControllesGeneradoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
