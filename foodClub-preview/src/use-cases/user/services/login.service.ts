import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GetUserByEmailService } from './get-byemail.service';

@Injectable()
export class AuthService {
  constructor(private GetUserByEmailService: GetUserByEmailService) {}

  private activeSessions: Record<string, { userId: number, expiresAt: Date }> = {};

  async login(email: string, password: string): Promise<string> {
    const user = await this.GetUserByEmailService.execute(email);
    
    // Verificação básica de senha (NÃO RECOMENDADO PARA PRODUÇÃO)
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Criar um token/sessão simples
    const token = Math.random().toString(36).substring(2) + 
                  Date.now().toString(36);
    
    // Armazenar a sessão (em memória - não persistente)
    this.activeSessions[token] = {
      userId: user.id,
      expiresAt: new Date(Date.now() + 3600 * 1000) // Expira em 1 hora
    };

    return token;
  }

  async validateToken(token: string): Promise<number> {
    const session = this.activeSessions[token];
    
    if (!session || new Date() > session.expiresAt) {
      throw new UnauthorizedException('Sessão inválida ou expirada');
    }

    return session.userId;
  }

  logout(token: string): void {
    delete this.activeSessions[token];
  }
}