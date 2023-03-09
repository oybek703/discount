import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Ad } from './ad.entity'

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  name: string

  @Column({ type: 'varchar' })
  description: string

  @OneToMany(type => Ad, ad => ad.category)
  ads: Ad[]
}
