import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post {
  @Field(() => Int)
  @PrimaryKey({ type: "number" })
  id!: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt: Date = new Date();

  @Field(() => String)
  @Property({ onUpdate: () => new Date(), type: "date" })
  updatedAt: Date = new Date();

  @Field(() => String)
  @Property({ type: "text" })
  title!: string;
}
