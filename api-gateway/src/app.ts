import express, { json } from "express";
import config from "./config";
import httpStatus from "http-status";

config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  return res.status(httpStatus.OK).send("API GATEWAY hadi lan ordan!!!!");
});

app.listen(PORT, () => {
  console.log(`api gateway listening on http://localhost:${PORT}`);
});
