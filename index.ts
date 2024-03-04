import express from 'express';
import dotenv from 'dotenv';
import { Main } from './Connection';
import { router } from './routes/ProductRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.json());

app.use("/product", router);

Main()

app.listen(port, ()=>{
    console.log(`app in ${port}`);
});


