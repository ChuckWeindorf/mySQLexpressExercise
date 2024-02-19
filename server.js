import express from "express";
import config from "./config";
// TODO: import router from routes/
import productRouter from "./routes/product.route";

const app = express();

app.use(express.json());
app.use("/api/product", productRouter);

// TODO: use the imported router to handle all requests

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
