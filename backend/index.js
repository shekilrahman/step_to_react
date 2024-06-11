import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

 app.use(
   cors({
        origin : 'https://step-to-react.vercel.app',
         methods : ['GET','POST','PUT','DELETE'],
       allowedHeaders :['Content-Type']
   })
 );

app.get('/', (request, response) => {
    console.log("GET /");
    return response.status(200).send("welcome to book stall");
});

app.use('/books',booksRoute);

mongoose.connect(mongoDBURL).then(() => {
    console.log('app connected to DB');
    app.listen(PORT, () => {
        console.log(`app is listening to port: ${PORT}`);
    });
}).catch((error) => {
    console.log("DB connection error:", error);
});

module.export =app;
