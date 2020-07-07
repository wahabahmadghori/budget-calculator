import React from 'react'
import {MdDelete,MdEdit} from 'react-icons/md'

const ExpensiveItem = ({expense,handleEdit,handleDelete}) => {
  const {_id, charge,amount}=expense
    return (
        <>
          <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">{amount}</span>
            </div> 
            <div>
            <MdDelete className="btn-icon clear-btn" onClick={()=>handleDelete(_id)}/>
            <MdEdit className="btn-icon edit-btn" onClick={()=>handleEdit(_id)}/>
            </div> 
          </li>  
        </>
    )
}

export default ExpensiveItem
