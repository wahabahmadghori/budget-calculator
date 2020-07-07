import React from "react";
import { MdSend } from "react-icons/md";
const ExpensiveForm = ({
  charge,
  amount,
  edit,
  handleCharge,
  handleAmount,
  handleSubmit,
}) => {
  return (
    <>
      <form className="form-center" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            value={charge}
            placeholder="e.g. charge"
            onChange={handleCharge}
            className="form-control"
            name="charge"
            id="charge"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmount}
            placeholder="e.g. 100"
            className="form-control"
            name="amount"
            id="amount"
          />
        </div>
      </form>
      <button type="submit" className="btn" onClick={handleSubmit}>
      {edit?'Edit':'Submit'}&nbsp;
        <MdSend />
      </button>
    </>
  );
};

export default ExpensiveForm;
