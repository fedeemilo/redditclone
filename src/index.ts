import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: "clonereddit",
    user: "milonitico",
    password: "gracias2021!",
    debug: !__prod__,
    type: "postgresql"
  });

  const post = orm.em.create(Post, {title: 'my first post'})
};

main();
