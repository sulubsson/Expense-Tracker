import React from 'react'
import './App.css'

import Header from'./Components/Header'
import Balance from './Components/Balance'
import { IncomeExpenses } from './Components/IncomeExpenses'
import {TransactionList} from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'
import { GlobalProvider } from './Components/context/GlobalState'

function App(props) {
    return (
        <GlobalProvider>
            <Header/>
            <div className="container">
                <Balance/>
                <IncomeExpenses/>
                <TransactionList/>
                <AddTransaction/>
            </div>
        </GlobalProvider>
    )
}



export default App

