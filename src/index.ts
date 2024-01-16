import express, { Express } from "express";
import dotenv from "dotenv";
import api from "./routes";

dotenv.config();

const app: Express = express();

const prefix = process.env.PREFIX || '/api';
const port = process.env.PORT;

app.use(prefix, api);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
