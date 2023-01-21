import React from "react";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import TotalSpending from "./components/TotalSpending";
import SpendingDetails from "./components/SpendingDetails";
import SpendingListAdder from "./components/SpendingListAdder";
import MonthlySpending from "./components/MonthlySpending";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Reset />
      <GlobalStyle />
      <TotalSpending />
      <SpendingListAdder />
      <SpendingDetails />
      <MonthlySpending />
    </RecoilRoot>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }

  body{
    font-family: 'Nanum Gothic', 'malgun gothic', AppleGothic, dotum, sans-serif;
    font-size: 16px;
    color: #333;
    line-height: 1.15;
    height: 100%;
    width: 50vw;
    margin: 0 auto;
  }

  a{
    text-decoration: none;
    color: #333;
  }

  input{
    font-family: 'Nanum Gothic', 'malgun gothic', AppleGothic, dotum, sans-serif;
    color: #333;
  }
`;
