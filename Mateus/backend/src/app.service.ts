import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHistorico() {
    return this.prisma.pomodoroSession.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }

  async salvarSessao(dados: { nome: string; tipo: string; duracaoMinutos: number }) {
    return this.prisma.pomodoroSession.create({
      data: {
        nome: dados.nome,
        tipo: dados.tipo,
        duracaoMinutos: dados.duracaoMinutos
      }
    });
  }
}