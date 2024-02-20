import express from "express";
// TODO: import router from users.route
import productRouter from "./product.route";

const router = express.Router();


// TODO: use the imported router to handle all routes matching "/users"
//Middleware 
// this stands on top of /api/products
router.use("/product", productRouter);


export default router;
