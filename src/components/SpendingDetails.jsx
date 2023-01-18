import React from "react";
import styled from "styled-components";
import Button from "./Button";

function SpendingDetails() {
  return (
    <Wrapper>
      <LINE>
        <LI>쇼핑</LI>
        <Button>삭제</Button>
      </LINE>
      <LINE>
        <LI>아구찜</LI>
        <Button>삭제</Button>
      </LINE>
      <LINE>
        <LI>커피</LI>
        <Button>삭제</Button>
      </LINE>
    </Wrapper>
  );
}

export default SpendingDetails;

const Wrapper = styled.div`
  margin-top: 30px;
  border: 5px solid #c4dfaa;
  border-radius: 15px;
  padding: 30px;
`;

const LINE = styled.div`
  display: flex;
`;

const LI = styled.li`
  list-style: none;
  margin-bottom: 30px;

  :last-child {
    margin-bottom: 0;
  }
`;
