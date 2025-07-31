import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from './controllers/postagem.controller';
//import { PostagemController, TemaModule } from './controllers/postagem.controller';

import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";

//bbb
import { TemaModule } from "src/tema/entities/tema.module";

@Module({
    // imports: [
    //     TypeOrmModule.forRoot({
    //         type: 'mysql',
    //         host: 'localhost',
    //         port: 3306,
    //         username: 'root',
    //         password: 'F8!terra@6voo',
    //         database: 'db_blogpessoal',
    //         entities: [Postagem],
    //         synchronize: true,
    //         logging: true,
    //     }),
    //     PostagemModule,
    // ],
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService],
    controllers: [PostagemController],
    exports: []
})

export class PostagemModule {}


