import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Body, Post, BadRequestException } from '@nestjs/common';
import { z } from 'zod';

const CriarSessaoSchema = z.object({
  tipo: z.enum(['FOCO', 'DESCANSO']), // Só aceita esses dois nomes exatos
  duracaoMinutos: z.number().positive().max(60) // Número positivo e no máximo 60 min
});


@Controller('pomodoro') // <-- Agora a rota é /pomodoro
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // <-- Rota GET /pomodoro
  index() {
    return {
      nome: 'Pomodoro API',
      versao: '1.0',
      rotas: {
        historico: 'GET /pomodoro/historico',
        salvar: 'POST /pomodoro/salvar'
      }
    };
  }

  @Get('historico') // <-- Rota GET /pomodoro/historico
  buscarHistorico() {
    return this.appService.getHistorico();
  }

@Post('salvar')
  async salvarSessao(@Body() body: any) {
    const dadosSeguros = CriarSessaoSchema.safeParse(body);
    
    if (!dadosSeguros.success) {
      throw new BadRequestException(dadosSeguros.error.issues);
    }

    const sessao = await this.appService.salvarSessao(dadosSeguros.data);
    return { mensagem: 'Sessão salva com sucesso!', sessao };
  }
}


