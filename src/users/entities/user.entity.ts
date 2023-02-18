import { BeforeInsert, Column, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";

export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column({unique: true})
    email: string;

    @Column()
    idade: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPasswod(){
        this.password = await bcrypt.hash(this.password, 10);
    }
}
