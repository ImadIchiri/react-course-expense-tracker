import { useEffect, useState } from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import TransactionsHistory from "./components/TransactionsHistory";

function App() {
  const [listOfTransactions, setListOfTransactions] = useState(
    JSON.parse(localStorage.getItem("listOfTransactions")) || []
  );
  const [transactionText, setTransactionText] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionType, setTransactionType] = useState("");

  const addTransaction = () => {
    if (!transactionText || !transactionAmount || !transactionType) return;
    if (isNaN(Number(transactionAmount))) return;

    const newTransaction = {
      id: new Date().getTime(),
      text: transactionText,
      amount:
        transactionType === "income"
          ? Number(transactionAmount)
          : -Number(transactionAmount),
    };

    setListOfTransactions([...listOfTransactions, newTransaction]);
    setTransactionText("");
    setTransactionAmount("");
    setTransactionType("");
  };

  const removeTransaction = (id) => {
    const newList = listOfTransactions.filter(
      (item) => Number(item.id) !== Number(id)
    );
    setListOfTransactions(newList);
  };

  useEffect(() => {
    localStorage.setItem(
      "listOfTransactions",
      JSON.stringify(listOfTransactions)
    );
  }, [listOfTransactions]);

  return (
    <div className="expenseTracker">
      <div className="wrapper">
        <h1>Expense Tracker</h1>
        <div className="balance">
          <h2>YOUR BALANCE</h2>
          <span>
            $
            {listOfTransactions.reduce((prev, curr) => {
              return prev + curr.amount;
            }, 0)}
          </span>
        </div>
        <article className="incomeAndExpense">
          <div>
            <h3>INCOME</h3>
            <span>
              $
              {listOfTransactions
                .filter((item) => item.amount > 0)
                .reduce((prev, curr) => {
                  return prev + curr.amount;
                }, 0)}
            </span>
          </div>
          <div>
            <h3>EXPENSE</h3>
            <span>
              $
              {listOfTransactions
                .filter((item) => item.amount < 0)
                .reduce((prev, curr) => {
                  return prev + curr.amount;
                }, 0) * -1}
            </span>
          </div>
        </article>
        {listOfTransactions.length ? (
          <TransactionsHistory
            listOfTransactions={listOfTransactions}
            removeTransaction={removeTransaction}
          />
        ) : null}
        <AddTransaction
          transactionText={transactionText}
          setTransactionText={setTransactionText}
          transactionAmount={transactionAmount}
          setTransactionAmount={setTransactionAmount}
          transactionType={transactionType}
          setTransactionType={setTransactionType}
          addTransaction={addTransaction}
        />
      </div>
    </div>
  );
}

export default App;
