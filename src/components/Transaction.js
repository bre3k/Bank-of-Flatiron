import React from "react";

function Transaction({ date, description, category, amount, id, transactions, setTransactions }) {
function handleDeleteTransaction() {
  fetch(`http://localhost:8001/transactions/${id}`, {
    method: "DELETE"
  })
  .then((r) => r.json)
  .then(() => {
    const availableTransactions = transactions.filter((transactions) => {
      return Transaction.id !== id; 
    })
    setTransactions(availableTransactions)
  })
}
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button className="ui button" onClick={handleDeleteTransactions}>Delete this transaction</button></td>
    </tr>
  );
}

export default Transaction;
