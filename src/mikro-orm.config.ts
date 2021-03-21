require("dotenv").config();
import "reflect-metadata";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

export default {
  migrations: {
    pattern: /^[\w-]+\d+\.[tj]s$/,
    path: path.join(__dirname, "./migrations"),
    disableForeignKeys: false
  },
  entities: [Post, User],
  dbName: "redditclone",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  debug: !__prod__,
  type: "postgresql",
  discovery: { disableDynamicFileAccess: false }
} as Parameters<typeof MikroORM.init>[0];
