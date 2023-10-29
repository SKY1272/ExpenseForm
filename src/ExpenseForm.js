import React, { useState } from "react";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setEnteredDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission here, e.g., send the data to a server or perform some action.
    console.log("Entered Title:", enteredTitle);
    console.log("Entered Amount:", enteredAmount);
    console.log("Entered Date:", enteredDate);

    // Reset the form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Expense Title:</label>
        <input type="text" value={enteredTitle} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Expense Amount:</label>
        <input
          type="number"
          value={enteredAmount}
          onChange={handleAmountChange}
        />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={enteredDate} onChange={handleDateChange} />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
