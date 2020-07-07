import React,{useState,useEffect} from 'react';
import './App.css';
import ExpensiveList from './components/ExpensiveList'
import ExpensiveForm from './components/ExpensiveForm'
import Alert from './components/Alert'
import { v1 as uuidv1 } from 'uuid'

const initialExpenses = localStorage.getItem("Expenses")?JSON.parse(localStorage.getItem("Expenses")):[]
function App() {
  const [Expenses, setExpenses] = useState(initialExpenses)
  // Expensive Form
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [alert, setAlert] = useState({show:false})
  const [edit,setEdit] = useState(false)
  const [id, setId] = useState('')


useEffect(() => {
  console.log('Effected..')
  localStorage.setItem('Expenses',JSON.stringify(Expenses))
}, [Expenses])




  const handleCharge = e =>{
    setCharge(e.target.value)
  }

  const handleAmount = e =>{
    setAmount(e.target.value)
  }

  const handleAlert = ({type,title})=>{
    setAlert({
      show:true,
      type,
      title
    })
    setTimeout(() => {
      setAlert({
        show:false
      })
    }, 3000);
  }

  const handleSubmit = e =>{
    e.preventDefault()
    if(charge !=='' && amount > 0){
      if(edit){
        let tempExpenses = Expenses.map(expense=>{
          return expense._id===id?{...expense,charge,amount}:expense
        })
        setExpenses(tempExpenses)
        handleAlert({type:'success',title:'Edited'})
        setEdit(false)
      }else{
        const singleExpense = {_id:uuidv1(),charge,amount}
        setExpenses([...Expenses,singleExpense])
        handleAlert({type:'success',title:'added'})
      }
      
      setCharge('')
      setAmount('')
      
    }else{
      handleAlert({type:'danger',title:'invalid input'})
    }
    
  }

  const handleClear = ()=>{
    setExpenses([])
    handleAlert({type:'danger',title:'All items deleted'})
    console.log('Cleared...')
  }

  const handleEdit = (_id)=>{
    console.log(_id)
    setEdit(true)
    let expense = Expenses.find(expense=>expense._id===_id)
    let {charge,amount}=expense
    setCharge(charge)
    setAmount(amount)
    setId(_id)
    console.log(expense)
    
  }

  const handleDelete = (_id)=>{
    console.log(_id)
    const filterExpenses = Expenses.filter(expense=>expense._id!==_id)
    setExpenses(filterExpenses)
    handleAlert({type:'danger',title:'item deleted'})
  }
  return (
    <>
       {alert && <Alert type={alert.type} title={alert.title}></Alert>}
       <h1>Budget Calculator</h1>
       <div className="App">
          <ExpensiveForm charge={charge} 
          handleCharge={handleCharge} 
          amount={amount}
          edit={edit}
          handleAmount={handleAmount} 
          handleSubmit={handleSubmit}/>
          <ExpensiveList expenses={Expenses} handleClear={handleClear} handleEdit={handleEdit} handleDelete={handleDelete}/>
       </div>
       <h1>
         Total Spending:{' '} <span>
          ${' '} {Expenses.reduce((acc,curr)=>{
           return(acc+=parseInt(curr.amount))
         },0)}</span>
       </h1>
    </>
  );
}

export default App;
