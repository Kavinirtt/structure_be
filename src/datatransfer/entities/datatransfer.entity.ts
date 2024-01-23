import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity("sample_data")

export class Datatransfer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
 
    @Column()
    createdBy: number;
 
    @UpdateDateColumn({ nullable: true, type: 'timestamp' })
    updatedAt: Date;
 
    @Column({ nullable: true })
    updatedBy: number;
 
    @DeleteDateColumn({ nullable: true, type: 'timestamp' })
    deletedAt: Date;
 
    @Column({ nullable: true })
    deletedBy: number;
}