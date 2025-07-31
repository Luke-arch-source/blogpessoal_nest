import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from '/Users/user/Documents/node-js/blogpessoal/src/tema/entities/tema.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemModule } from './postagem/postagem.module';
import { Postagem } from './postagem/entities/postagem.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'F8!terra@6voo',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema],
      synchronize: true,
    }),
    PostagemModule,
    TemaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
