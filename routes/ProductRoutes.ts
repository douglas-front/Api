import express from "express";
import dotenv from 'dotenv';
import { GetAll, Post, Remove } from "../Controllers/ProductController";

dotenv.config();

export const router = express.Router();

const post = process.env.POST;
const del = process.env.DEL;



router.post(`${post}`, Post);
router.get("/", GetAll);
router.delete(`${del}`, Remove);