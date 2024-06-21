// this file is responsible for creating global state management using context

import { createContext } from "react";

interface FinancialRecord {
    id?:string,
    userId:string,
    date:Date,
    description:string,
    amount:number,
    category:string,
    paymentMethod:string
}

interface FinancialRecordContextType{
    records:FinancialRecord[];
    addRecord: (record: FinancialRecord)=>void;
    updateRecord: (id:string, newRecord: FinancialRecord)=>void;
    deleteRecord: ( id: string)=>void;
}


export const FinancialRecordContext = createContext<FinancialRecordContextType | undefined>(undefined);