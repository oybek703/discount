import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Ad } from './ad.entity'

@Entity({ name: 'locations' })
export class Location {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  name: string

  @Column({ type: 'float', nullable: true })
  longitude: string

  @Column({ type: 'float', nullable: true })
  latitude: string

  @OneToMany(type => Ad, advertisement => advertisement.location)
  ads: Ad[]
}
