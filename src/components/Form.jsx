import { useState } from "react";
import { useDispatch } from 'react-redux';
import { deposit, mobileUpdate, nameUpdate, reset, withdraw } from "./Actions";
let Form = () => {

    let [amount, setAmount] = useState('')
    let [name, setName] = useState('')
    let [mobileno, setMobileNo] = useState('')
    let [trasactionId,setTransactionId] = useState(0)

    let dispatch = useDispatch()
    return (
        <>
            <div className="container">
                <div className="text-primary">
                    <h2>Form</h2>
                </div>
                <div className="row">
                    <div className="col-5">
                        <input type="number" className="form-control" placeholder="enter amount" value={amount} onChange={e => setAmount(e.target.value)}></input>
                    </div>
                    <button className="col-1 btn btn-primary" onClick={() => {
                        dispatch(deposit(amount));
                        setTransactionId(trasactionId+1)
                        dispatch({type : "ADD", payload : {id : trasactionId, amount : amount, date : new Date(), type : "Credit"}})
                        setAmount('')
                    }}>Deposit</button>
                    <button className="col-1 btn btn-danger ms-3" onClick={() => {
                        dispatch(withdraw(amount));
                        setTransactionId(trasactionId+1)
                        dispatch({type : "ADD", payload : {id : trasactionId, amount : amount, date : new Date(), type : "Debit"}})
                        setAmount('')
                    }}>Withdraw</button>
                </div>
                <div className="row mt-3">
                    <div className="col-5">
                        <input type="text" className="form-control" placeholder="enter name" value={name} onChange={e => setName(e.target.value)}></input>
                    </div>
                    <button className="col-1 btn btn-primary"
                        onClick={() => {
                            dispatch(nameUpdate(name))
                            setName("")
                        }}>Update</button>
                </div>
                <div className="row mt-3">
                    <div className="col-5">
                        <input type="number" className="form-control" placeholder="enter mobile no" value={mobileno} onChange={e => setMobileNo(e.target.value)}></input>
                    </div>
                    <button className="col-1 btn btn-primary" onClick={() => {
                        dispatch(mobileUpdate(mobileno))
                        setMobileNo("")
                    }}>Update</button>
                </div>
                <button className="btn btn-danger mt-3" onClick={() => {
                    dispatch(reset())
                }}>Reset</button>
            </div>
        </>
    )
}



export default Form;