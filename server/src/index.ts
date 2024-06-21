import express ,{ Express } from "express";
import mongoose, { mongo } from "mongoose";
import financeRoute from './routes/financialRoute'

const app: Express = express();

const port =process.env.PORT || 3001;


app.use(express.json());

// when atlas is using just change the uri connection string 
const mongoURI:string = "mongodb://127.0.0.1:27017/Expense_Tracker";

// line for connecting the database

mongoose.connect(mongoURI)
.then(() =>{
    console.log("MongoDB connected successfully");
})
.catch((err)=>{
    console.log(err);
})

app.use("/financial-record",financeRoute);

app.listen(port, ()=>{
    console.log(`server running at  ${port}`);
})