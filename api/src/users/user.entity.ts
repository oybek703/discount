import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Ad } from '../ads/entities/ad.entity'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', unique: true })
  username: string

  @Column({ type: 'varchar' })
  first_name: string

  @Column({ type: 'varchar', nullable: true })
  last_name: string

  @Column({ type: 'bigint', nullable: true })
  telegram_id: string

  @Column({ type: 'varchar', unique: true, nullable: true })
  phone_number: string

  @Column({ type: 'varchar', unique: true, nullable: true })
  email: string

  @Column({ type: 'varchar', nullable: true })
  telegram_username: string

  @Column({ type: 'varchar' })
  password: string

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date

  @OneToMany(type => Ad, advertisement => advertisement.user)
  ads: Ad[]
}
