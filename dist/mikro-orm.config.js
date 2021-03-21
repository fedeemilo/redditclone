"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
require("reflect-metadata");
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const path_1 = __importDefault(require("path"));
const User_1 = require("./entities/User");
exports.default = {
    migrations: {
        pattern: /^[\w-]+\d+\.[tj]s$/,
        path: path_1.default.join(__dirname, "./migrations"),
        disableForeignKeys: false
    },
    entities: [Post_1.Post, User_1.User],
    dbName: "redditclone",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    debug: !constants_1.__prod__,
    type: "postgresql",
    discovery: { disableDynamicFileAccess: false }
};
//# sourceMappingURL=mikro-orm.config.js.map