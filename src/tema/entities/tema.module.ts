import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from "/Users/user/Documents/node-js/blogpessoal/src/tema/entities/tema.entity";
import { TemaController } from '/Users/user/Documents/node-js/blogpessoal/src/tema/controllers/tema.controller';
import { TemaService } from '/Users/user/Documents/node-js/blogpessoal/src/tema/services/tema.service';


@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService],
    controllers: [TemaController],
    exports: [TemaService]
})
export class TemaModule {}


