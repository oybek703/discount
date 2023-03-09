import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Location } from './location.entity'
import { User } from '../../users/user.entity'
import { Category } from './category.entity'

@Entity({ name: 'ads' })
export class Ad {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  title: string

  @Column({ type: 'varchar' })
  description: string

  @Column({ type: 'float', nullable: true })
  old_price: number

  @Column({ type: 'float', nullable: true })
  new_price: number

  @Column({ type: 'timestamp', nullable: true })
  from_date: Date

  @Column({ type: 'timestamp', nullable: true })
  to_date: Date

  @Column({ type: 'bigint', nullable: true })
  views_count: number

  @Column({ type: 'float', nullable: true })
  discount_percent: number

  @Column({ type: 'boolean', default: false })
  is_active: boolean

  @ManyToOne(type => Location, location => location.ads)
  @JoinColumn({ name: 'location_id' })
  location: Location

  @ManyToOne(type => User, user => user.ads)
  @JoinColumn({ name: 'user_id' })
  user: User

  @ManyToOne(type => Category, category => category.ads)
  @JoinColumn({ name: 'category_id' })
  category: Category
}
