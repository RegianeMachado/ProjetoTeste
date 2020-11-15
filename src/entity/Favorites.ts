import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Products } from "./Products";
import { Users } from "./Users";

@Entity()
export class Favorites {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (users) => users.id)
  users: Users;

  @ManyToOne(() => Products, (products) => products.id)
  products: Products;
}
