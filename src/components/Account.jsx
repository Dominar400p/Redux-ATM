import { useSelector } from "react-redux";

let Account = () =>{
    let reduxData = useSelector((state)=>{
        return state
    })
    console.log(reduxData)
    return(
        <>
        <div className="container mt-2">
            <div className="text-primary">
                <h2>Account Details</h2>
            </div>
            <div className="col-6">
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Balance</th><th>User Name</th><th>Mobile No</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{reduxData.account.balance}</td>
                            <td>{reduxData.account.name}</td>
                            <td>{reduxData.account.mobile}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            Available Balance : {reduxData.account.balance}
            <div className="text-primary">
                <h2>Transaction Details</h2>
            </div>
            <div className="col-6">
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Id</th><th>Amount</th><th>Type</th><th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reduxData.transaction.map((data)=>{
                                return(
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.amount}</td>
                                        <td>{data.type}</td>
                                        <td>{data.date.toString()}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
        </>
    )
};


export default Account;