import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const TransactionsHistory = ({ listOfTransactions, removeTransaction }) => {
  return (
    <article className="history">
      <h3>History</h3>
      <div className="historyList">
        {listOfTransactions.map((item) => (
          <div
            key={`${item.id}-${item.text}`}
            className={`historyItem ${item.amount > 0 ? "green" : "red"}`}
          >
            <h4>{item.text}</h4>
            <span>{item.amount} $</span>
            <BsFillTrashFill
              className="delete"
              onClick={() => removeTransaction(item.id)}
            />
          </div>
        ))}
      </div>
    </article>
  );
};

export default TransactionsHistory;
