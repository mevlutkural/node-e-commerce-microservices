import express, { json } from "express";
import config from "./config";
import httpStatus from "http-status";

config();

const PORT = process.env.PORT || 3002;
const app = express();

app.get("/", (req, res) => {
  return res.status(httpStatus.OK).send("PRODUCTS SERVICE");
});

app.listen(PORT, () => {
  console.log(`products service listening on http://localhost:${PORT}`);
});
