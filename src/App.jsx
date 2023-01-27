import React from "react";
import TotalSpending from "./components/TotalSpending";
import SpendingListAdder from "./components/SpendingListAdder";
import SpendingDetails from "./components/SpendingDetails";
import MonthlySpending from "./components/MonthlySpending";
import { RecoilRoot } from "recoil";
import "./reset.css";

function App() {
    return (
        <RecoilRoot>
            <TotalSpending />
            <SpendingListAdder />
            <SpendingDetails />
            {/* <MonthlySpending /> */}
        </RecoilRoot>
    );
}

export default App;
