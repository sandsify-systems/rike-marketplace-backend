import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ResearchInstitution } from './ResearchInstitution';
import { User } from './User';

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ResearchInstitution)
  institution: ResearchInstitution;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  availability: boolean;

  @Column()
  verificationStatus: string;

  @ManyToOne(() => User)
  verifiedBy: User;
}
