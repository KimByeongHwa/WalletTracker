import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { spendingListState } from "../recoil/spendingListState";
import Button from "./Button";

function SpendingListAdder() {
  const [isOpened, setIsOpend] = useState(true);
  const [inputSpending, SetInputSpending] = useState("");
  const setSpendingList = useSetRecoilState(spendingListState);

  function InputToggle(e) {
    setIsOpend((prev) => !prev);

    const form = document.getElementById("inputForm");
  }

  function onChangeInput(e) {
    const input = e.target.value;
    SetInputSpending(input);
  }

  function addSpendingList() {
    setSpendingList(inputSpending);
  }

  return (
    <Wrapper>
      {/* <Toggle onClick={InputToggle}>{isOpened && "소비 항목 추가하기"}</Toggle> */}
      <Toggle onClick={InputToggle}>
        {isOpened ? (
          "소비 항목 추가하기"
        ) : (
          <Form id="inputForm">
            <Li>
              <InputTitle>소비 날짜</InputTitle>
              <Input placeholder="YYYY/MM/DD"></Input>
            </Li>
            <Li>
              <InputTitle>소비 항목</InputTitle>
              <Input placeholder="Description"></Input>
            </Li>
            <Li>
              <InputTitle>소비 금액</InputTitle>
              <Input placeholder="Amount"></Input>
            </Li>
            <Buttons>
              <Button size={"large"} margin={"0 5rem 0 0"}>
                추가
              </Button>
              <Button size={"large"}>취소</Button>
            </Buttons>
          </Form>
        )}
      </Toggle>
    </Wrapper>
  );
}

export default SpendingListAdder;

const Wrapper = styled.div`
  text-align: center;
`;

const Toggle = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-top: 30px;
  font-size: 26px;
  font-weight: 600;

  :hover {
    color: #c4dfaa;
    border-bottom: 5px solid #c4dfaa;
    border-radius: 3px;
    padding-bottom: 4px;
    transform: scale(1.2) perspective(1px);
    transition: all 0.5s;
  }
`;
const Form = styled.div`
  display: block;
  margin-left: 4rem;
`;

const Li = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const InputTitle = styled.span`
  margin-right: 30px;
`;

const Input = styled.input`
  display: block;
  border: none;
  outline: none;
  width: 15vw;
  height: 2.5rem;
  border-radius: 4px;
  padding: 3px 16px;
  margin: 5px 0 5px 10px;
  background-color: #e8f3d6;
  font-size: 16px;
  font-family: "Nanum Gothic", "malgun gothic", AppleGothic, dotum, sans-serif;
  font-weight: 600;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;
