import React from "react";

import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const expenses = [
    { id: 123123, name: "Food", cost: 460 },
    { id: 123123, name: "Shopping", cost: 100 },
    { id: 123123, name: "Fuel", cost: 550 },
    { id: 123123, name: "Shoes", cost: 350 },
    { id: 123123, name: "Grocery", cost: 500 },
  ];
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
}
