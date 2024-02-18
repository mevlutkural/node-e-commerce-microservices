import express, { json } from "express";
import config from "./config";
import httpStatus from "http-status";

config();

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/", (req, res) => {
  return res.status(httpStatus.OK).send("USERS SERVICE");
});


// app.get("/users", (req, res) => {
//   return res.status(httpStatus.OK).send("USERS SERVICE");
// });

app.listen(PORT, () => {
  console.log(`users service listening on http://localhost:${PORT}`);
});
