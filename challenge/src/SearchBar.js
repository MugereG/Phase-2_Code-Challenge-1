import React, { useState, useEffect } from "react";
import DataItem from "./DataItem";

const Data = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  }, [searchTerm, transactions]);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter Term to Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredTransactions.map(transaction => (
        <DataItem
          key={transaction.id}
          date={transaction.date}
          description={transaction.description}
          category={transaction.category}
          amount={transaction.amount}
        />
      ))}
    </div>
  );
};

export default Data;
