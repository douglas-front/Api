import { model } from "../Models/SchemaDb";
import { Request, Response } from "express";

export async function GetAll(req: Request, res: Response) {
  try {
    const ProductFind = await model.find();
    res.json(ProductFind);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "can't get products" });
  }
}
export async function Post(req: Request, res: Response) {
  try {
    const { Name, Image, ImageBack, ImageDetails, Price, Description, Type } = req.body;

    if (!Name || !Image || !ImageBack || !ImageDetails || !Price || !Description || !Type) {
      return res
        .status(400)
        .json({ message: "Invalid product data. All fields are required." });
    }

    const newProduct = new model({
      Name,
      Image,
      ImageBack,
      ImageDetails,
      Price,
      Description,
      Type,
    });

    await newProduct.save();

    return res
      .status(201)
      .json({ message: "Product has been posted!", product: newProduct });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "can't post products" });
  }
}
export async function Remove(req: Request, res: Response) {
  try {
    const productId = await model.findById(req.params.id);

    if (!productId) {
      return res.status(404).json({ message: "product has not found" });
    }

    await model.deleteOne({ _id: productId });

    res.json({ message: "product has been deleted", productId });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "can't delete product" });
  }
}
