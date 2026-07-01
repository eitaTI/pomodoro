import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /pomodoro', () => {
    return request(app.getHttpServer())
      .get('/pomodoro')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('nome', 'Pomodoro API');
        expect(res.body).toHaveProperty('rotas');
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
