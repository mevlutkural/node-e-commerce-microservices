import express, { json } from "express";
import config from "./config";
import httpStatus from "http-status";

config();

const PORT = process.env.PORT || 3003;
const app = express();

app.get("/", (req, res) => {
  return res.status(httpStatus.OK).send("ORDERS SERVICE");
});

app.listen(PORT, () => {
  console.log(`orders service listening on http://localhost:${PORT}`);
});
