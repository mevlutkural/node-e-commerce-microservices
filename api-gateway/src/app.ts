import express, { json } from "express";
import config from "./config";
import httpStatus from "http-status";
import { createProxyMiddleware } from "http-proxy-middleware";

config();

const app = express();
const PORT = process.env.PORT || 3000;

const userServiceURL = "http://users-service:3001";
const productServiceURL = "http://products-service:3002";
const orderServiceURL = "http://orders-service:3003";

const userProxy = createProxyMiddleware({
  target: userServiceURL,
  changeOrigin: true,
  pathRewrite: {
    "^/users": "",
  },
});

const productProxy = createProxyMiddleware({
  target: productServiceURL,
  changeOrigin: true,
  pathRewrite: {
    "^/products": "",
  },
});

const orderProxy = createProxyMiddleware({
  target: orderServiceURL,
  changeOrigin: true,
  pathRewrite: {
    "^/orders": "",
  },
});

app.get("/", (req, res) => {
  return res.status(httpStatus.OK).send("API GATEWAY");
});

app.use("/users", userProxy);
app.use("/products", productProxy);
app.use("/orders", orderProxy);

app.listen(PORT, () => {
  app.all("*", (_, res) => {
    return res.status(httpStatus.NOT_FOUND).send("404 NOT FOUND");
  });

  console.log(`api gateway listening on http://localhost:${PORT}`);
});
