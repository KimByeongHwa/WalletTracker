import React from "react";
import styled from "styled-components";

function TotalSpending() {
  return (
    <Wrapper>
      <SpendingTitle>
        이번 달 총 지출 금액은 <br />
        <Strong>100원</Strong>
        <br /> 입니다.
      </SpendingTitle>
    </Wrapper>
  );
}

export default TotalSpending;

const Wrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 30px;
`;

const SpendingTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 800;
`;
const Strong = styled.div`
  border-bottom: 5px solid #c4dfaa;
  border-radius: 3px;
  display: inline-block;
  margin: 30px 0;
  padding-bottom: 4px;
  font-size: 2.5rem;
`;
