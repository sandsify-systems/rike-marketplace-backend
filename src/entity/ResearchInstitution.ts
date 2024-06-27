import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class ResearchInstitution {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @ManyToOne(() => User, user => user.createdResearchInstitutions, { lazy: true })
  createdBy: User;

  @Column({ nullable: true, type: 'timestamp' }) // Example nullable column with timestamp type
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP', // Default value set to current timestamp
    onUpdate: 'CURRENT_TIMESTAMP', // On update also set to current timestamp
  })
  updatedAt: Date;
}
