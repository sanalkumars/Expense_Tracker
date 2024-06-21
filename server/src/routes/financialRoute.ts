import express , {  Response , Request } from "express";
import FinancialRecordModel from "../model/financeModel";


const router = express.Router();

// first route for getting all the records for a particular user both route , and controller function are comabined

router.get("/getAllByUserID/:userId" , async( req: Request , res: Response) =>{
try {
    const userId  = req.params.userId;

    const records = await FinancialRecordModel.find({ userId:userId});
    if (records.length === 0) {
        return res.status (401).send("No records find for the user!!!");
    }
    res.status(200).send(records);
} catch (error) {
    res.status(500).send(error);
}
});

// route and function for adding new record

router.post("/addRecord", async( req: Request , res: Response) =>{
    try {
        const Record = req.body;
        const newRecord = new FinancialRecordModel(Record);
        const savedRecord = await newRecord.save();
        res.status(200).send(savedRecord);

    } catch (error) {
        res.status(500).send(error);
    }
})

// function and route for updating the record

router.put("/updateRecord/:id", async( req: Request , res: Response) =>{
    try {
        const id = req.params.id;
        const updatedRecord = req.body();
        const record = await FinancialRecordModel.findByIdAndUpdate(id , updatedRecord, { new:true } );

        if (!record) {
            res.status(401).send()
        }
        res.status(200).send(record);
    } catch (error) {
        res.status(500).send(error)
    }
})

// function and route for deleting a  record

router.delete("/deleteRecord/:id", async( req: Request , res: Response) =>{
    try {
        const id = req.params.id;
        const record = FinancialRecordModel.findByIdAndDelete(id);

        if (!record) {
            res.status(401).send()
        }
        res.status(200).send(record);
    } catch (error) {
        res.status(500).send(error)
    }
})

export default router;