import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  const mockAppService = {
    getHistorico: jest.fn().mockResolvedValue([
      { id: 1, tipo: 'FOCO', duracaoMinutos: 25, createdAt: new Date() }
    ])
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: AppService, useValue: mockAppService }],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('GET /pomodoro', () => {
    it('deve retornar informações da API', () => {
      const result = appController.index();
      expect(result).toHaveProperty('nome', 'Pomodoro API');
      expect(result).toHaveProperty('rotas');
      expect(result.rotas).toHaveProperty('historico');
      expect(result.rotas).toHaveProperty('salvar');
    });
  });

  describe('GET /pomodoro/historico', () => {
    it('deve retornar o histórico de sessões', async () => {
      const result = await appController.buscarHistorico();
      expect(result).toHaveLength(1);
      expect(result[0]).toHaveProperty('tipo', 'FOCO');
    });
  });
});
