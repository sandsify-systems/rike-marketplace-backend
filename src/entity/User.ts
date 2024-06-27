import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ResearchInstitution } from './ResearchInstitution';
import { Equipment } from './Equipment';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  image: string;

  @Column({ nullable: true, type: 'timestamp' }) // Example nullable column with timestamp type
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP', // Default value set to current timestamp
    onUpdate: 'CURRENT_TIMESTAMP', // On update also set to current timestamp
  })
  updatedAt: Date;

  @Column({ nullable: true })
  resetPasswordToken: string;

  @Column({ nullable: true })
  resetPasswordExpires: Date;

  @Column({ nullable: true })
  twoFactorToken: string;

  @Column({ nullable: true })
  twoFactorExpires: Date;

  @Column({ default: false })
  twoFactorEnabled: boolean;

  @Column({ default: true })
  accountStatus: boolean;

  @Column({
    type: 'enum',
    enum: ['admin', 'institution', 'researcher', 'agent', 'explorer'],
    default: 'explorer', // Example default role
  })
  role: string;

  @OneToMany(() => ResearchInstitution, researchInstitution => researchInstitution.createdBy)
  createdResearchInstitutions: ResearchInstitution[];

  @OneToMany(() => Equipment, equipment => equipment.verifiedBy)
  verifiedEquipments: Equipment[];
}

