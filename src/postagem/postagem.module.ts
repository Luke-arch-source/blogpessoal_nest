import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'F8!terra@6voo',
            database: 'db_blogpessoal',
            entities: [Postagem],
            synchronize: true,
            logging: true,
        }),
        PostagemModule,
    ],
    providers: [],
    controllers: [],
})

export class PostagemModule {}


