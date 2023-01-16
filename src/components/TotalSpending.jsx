import React from "react";
import styled from "styled-components";

function TotalSpending() {
  return (
    <Wrapper>
      <h1>당신의 이번 달 총 지출금액은 100원 입니다.</h1>
    </Wrapper>
  );
}

export default TotalSpending;

const Wrapper = styled.div`
  margin-top: 30px;
`;
