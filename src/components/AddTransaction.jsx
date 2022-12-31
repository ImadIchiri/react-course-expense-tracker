import React from "react";

const AddTransaction = ({
  transactionText,
  setTransactionText,
  transactionAmount,
  setTransactionAmount,
  transactionType,
  setTransactionType,
  addTransaction,
}) => {
  return (
    <article className="addTransaction">
      <h3>Add new transaction</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="textInput">Text</label>
          <input
            type="text"
            id="textInput"
            placeholder="Enter text..."
            value={transactionText}
            onChange={(e) => setTransactionText(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amountInput">Amount</label>
          <input
            type="text"
            id="amountInput"
            placeholder="Enter amount..."
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amountInput">Transaction Type</label>
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="" disabled>
              Choose type
            </option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <button className="addBtn" onClick={addTransaction}>
          Add transaction
        </button>
      </form>
    </article>
  );
};

export default AddTransaction;
