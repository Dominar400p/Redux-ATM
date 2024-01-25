import { combineReducers, createStore } from "redux"
let initialState = {
    balance: 0,
    name: "",
    mobile: ""
}


function AccountReducer(state = initialState, action) {
    switch (action.type) {
        case "DEPOSIT": return ({ ...state, balance: state.balance + + action.payload })
        case "WITHDRAW": return ({ ...state, balance: state.balance - + action.payload })
        case "MOBILEUPDATE": return ({ ...state, mobile: action.payload })
        case "NAMEUPDATE": return ({ ...state, name: action.payload })
        case "RESET": return initialState
        default: return state
    }
}

function TransactionReducer(state = [], action) {
    switch (action.type) {
        case "ADD": return ([...state, { id: action.payload.id, amount: action.payload.amount, type: action.payload.type, date: action.payload.date }])
        default: return state
    }
}

let reducers = combineReducers({
    account: AccountReducer,
    transaction: TransactionReducer
})
let store = createStore(reducers)

export default store;