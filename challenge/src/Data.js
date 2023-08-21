import {useState, useEffect} from "react";
import DataItem from "./DataItem";
let data = [1,2,3,4,5,6]


const Data = () =>{

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8001/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching data:', error));
    }, [])

    return(
       <div>
        {transactions.map(transaction => (
          <DataItem key = {transaction.id} date = {transaction.date} description = {transaction.description} category = {transaction.category} amount = {transaction.amount}/>
        ))}
        
       </div>
    )
}

export default Data;    