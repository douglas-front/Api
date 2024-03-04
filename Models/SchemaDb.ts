import mongoose from "mongoose";

const schema = mongoose.Schema

const ProductSchema = new schema({
    Name: {type: String, required: true},
    Image: {type:String, required: true},
    Price: {type:String, required: false},
    Type: {type: String, required: true}
})

export const model = mongoose.model("Product", ProductSchema)