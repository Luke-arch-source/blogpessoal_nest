import { IsNotEmpty } from 'class-validator'; 
import { Tema } from 'src/tema/entities/tema.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity({name: "tb_postagens"})
export class Postagem{

    @PrimaryGeneratedColumn()
    id: number

    //@IsNotEmpty()
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string

    @UpdateDateColumn()
    data: Date

    @ManyToMany(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    } )
    tema: Tema


}

//bb
// import { IsNotEmpty } from "class-validator"
// import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
// import { Tema } from "../../tema/entities/tema.entity"

// @Entity({name: "tb_postagens"})
// export class Postagem {

//     @PrimaryGeneratedColumn()    
//     id: number

//     @IsNotEmpty()
//     @Column({length: 100, nullable: false})
//     titulo: string

//     @IsNotEmpty()
//     @Column({length: 1000, nullable: false})
//     texto: string

//     @UpdateDateColumn()
//     data: Date
    
//     @ManyToOne(() => Tema, (tema) => tema.postagem, {
//         onDelete: "CASCADE"
//     })
//     tema: Tema

// }





