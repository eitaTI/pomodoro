import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [LoggerModule.forRoot({
      pinoHttp: {
        transport: { target: 'pino-pretty' } // Deixa o log bonito no terminal local!
      }
    })],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
