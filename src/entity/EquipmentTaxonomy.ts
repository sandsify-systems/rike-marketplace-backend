// src/entity/EquipmentTaxonomy.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Equipment } from './Equipment';

@Entity()
export class EquipmentTaxonomy {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Equipment)
  equipment: Equipment;

  @Column()
  parameter: string;

  @Column()
  value: string;
}
