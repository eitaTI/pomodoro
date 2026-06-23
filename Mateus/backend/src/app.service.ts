import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  // Injetando o banco aqui dentro!
  constructor(private prisma: PrismaService) {}

  async getHistorico() {
    // Busca tudo que está no banco, ordenado pelo mais recente
    return this.prisma.pomodoroSession.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }
}