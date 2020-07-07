import React from "react";
import ExpensiveItem from "./ExpensiveItem";
import { MdDelete } from "react-icons/md";

const ExpensiveList = ({ expenses, handleClear, handleEdit, handleDelete }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return <ExpensiveItem key={expense._id} expense={expense} handleEdit={handleEdit} handleDelete={handleDelete}/>;
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={handleClear}>
          {" "}
          List&nbsp;
          <MdDelete style={{ fontSize: "20px" }} />
        </button>
      )}
    </>
  );
};

export default ExpensiveList;
