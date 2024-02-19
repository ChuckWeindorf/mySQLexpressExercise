import express from "express";
import { findAll, findOne, addOne, updateOne, removeOne } 
    from "../controllers/product.controller";

const productRouter = express.Router();

productRouter.get("/:id?", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data;

    if (id) {
      data = await findOne(id);
    } else {
      data = await findAll();
    }
   
    res.json(data);
  }  catch (err) {next(err)};

});

productRouter.post("/", async (req, res, next) => {
  try {
  let productDTO = req.body;
  let data = await addOne(productDTO);
  res.json(data);
  } catch (err) {next(err)};
});

productRouter.put("/:id", async (req, res, next) => {
  try{
  let { id } = req.params;
  let productDTO = req.body;
  let data = await updateOne(id, productDTO);
  res.json(data);
  }  catch (err) {next(err)};
});

productRouter.delete("/:id", async (req, res, next) => {
  try {
  let { id } = req.params;
  let data = await removeOne(id);
  res.json(data);
  } catch (err) {next(err)};
});

export default productRouter;