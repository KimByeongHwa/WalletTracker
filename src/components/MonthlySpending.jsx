import React from "react";
import styled from "styled-components";

function MonthlySpending() {
  return <Wrapper>월별 지출내역</Wrapper>;
}

export default MonthlySpending;

const Wrapper = styled.div`
  margin-top: 30px;
  border: 5px solid #c4dfaa;
  border-radius: 15px;
  padding: 30px;
`;