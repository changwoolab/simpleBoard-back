import { PostEntity } from 'src/post/post.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @Column()
  name!: string;

  @OneToMany(() => PostEntity, (post) => post.user)
  posts: PostEntity[];
}
