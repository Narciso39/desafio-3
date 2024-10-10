import { createPool, PoolOptions } from "mysql2/promise";

const dbConfig: PoolOptions = {
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "crud",
};

const db = createPool(dbConfig);

export default db;
