import React,{useState,useEffect}from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [search, setSearch] = useState("");
  const [transactions, setTransactions] = useState([]);
  function fetchData(){
    fetch("http://localhost:8001/transactions")
    .then((res) => {
      return res.json()}
    )
    .then((data) =>setTransactions(data))
  }
    useEffect(() => {
        fetchData()
  }, []);
  return (
    <div>
      <Search Search={search} setSearch={setSearch} />
      <AddTransactionForm transactions={transactions} setTransactions={setTransactions} />
      <TransactionsList transactions={transactions} search={search} setSearch={setSearch} />
    </div>
  );
}

export default AccountContainer;
