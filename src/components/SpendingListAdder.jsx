import React from "react";
import styled from "styled-components";
import Button from "./Button";

function SpendingListAdder() {
  return (
    <Wrapper>
      <Input placeholder="지출 내역을 입력하세요."></Input>
      <Button size='large' color="#c4dfaa">
        추가
      </Button>
    </Wrapper>
  );
}

export default SpendingListAdder;

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  margin-right: 30px;
  margin-left: 60px;
  border: none;
  outline: none;
  width: 27vw;
  height: 3rem;
  border-radius: 4px;
  padding: 3px 16px;
  background-color: #E8F3D6;
  font-size: 16px;
  font-family: 'Nanum Gothic', 'malgun gothic', AppleGothic, dotum, sans-serif;
  font-weight: 600;
  text-align: center;
`;
