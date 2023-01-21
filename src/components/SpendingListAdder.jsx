import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { spendingListState } from "../recoil/spendingListState";
import Button from "./Button";

function SpendingListAdder() {
  const [inputSpending, SetInputSpending] = useState("");
  const setSpendingList = useSetRecoilState(spendingListState);

  function onChangeInput(e) {
    const input = e.target.value;
    SetInputSpending(input);
  }

  function addSpendingList() {
    setSpendingList(inputSpending);
  }

  return (
    <Wrapper>
      {/* <InputWrapper> */}
      <Input onChange={onChangeInput} placeholder="언제 소비하셨나요?"></Input>
      <Input
        onChange={onChangeInput}
        placeholder="무엇을 구매하셨나요?"
      ></Input>
      <Input
        onChange={onChangeInput}
        placeholder="얼마를 사용하셨나요?"
      ></Input>
      {/* </InputWrapper> */}
      <AddButton size="large" color="#c4dfaa" onClick={addSpendingList}>
        추가
      </AddButton>
    </Wrapper>
  );
}

export default SpendingListAdder;

const Wrapper = styled.div``;

const Input = styled.input`
  display: block;
  border: none;
  outline: none;
  width: 20vw;
  height: 2.5rem;
  border-radius: 4px;
  padding: 3px 16px;
  margin: 0 auto 10px;
  background-color: #e8f3d6;
  font-size: 16px;
  font-family: "Nanum Gothic", "malgun gothic", AppleGothic, dotum, sans-serif;
  font-weight: 600;
  text-align: center;
`;

const AddButton = styled(Button)`
  color: red;
`;
