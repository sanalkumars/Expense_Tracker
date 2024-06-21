import { useUser } from "@clerk/clerk-react"
import { FinancialRecordForm } from "./financial-recordform";
import { FinancialRecord } from "./financial-record";


const DashBoard = () => {
    
    const {user} = useUser();
  return (
    <div className="dashboard-container">
        <h2> Welcome {user?.firstName} ! Here are your Finances: </h2>
        <FinancialRecordForm />
        <FinancialRecord />
    </div>
  )
}

export default DashBoard