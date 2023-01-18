import React from "react";
import styled from "styled-components";
import Button from "./Button";

function SpendingListAdder() {
  return (
    <Wrapper>
      <Input placeholder="지출 내역을 입력하세요."></Input>
      <Button padding="12px 16px" color="#C4DFAA">
        추가
      </Button>
    </Wrapper>
  );
}

export default SpendingListAdder;

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
`;

const Input = styled.input``;
