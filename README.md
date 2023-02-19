# 💸 WalletTracker

Recoil과 SCSS를 사용해보기 위해 만든 가계부 웹

<br>
<br>

## 📚 사용 라이브러리

- Recoil
- SCSS
- react-datepicker
- date-fns

<br>
<br>

## 📐 주요 기능

1️⃣. 소비 항목 추가
  - 소비 항목을 `spendingList`를 모든 컴포넌트에서 사용 가능하도록 `Recoil State`로 정의
  - 입력한 데이터들을 하나의 객체 데이터로 묶어서 `spendingList` 배열에 추가하는 방식
  - 계속해서 변하는 spendingList 값이 즉시 반영되어 표시되도록<br>
    `setSpendingList([...spendingList, spending]);`
<br>

2️⃣ . 추가 소비 항목 표시
  - `DatePicker`에 setState를 걸어 선택한 날짜 값을 가져왔다.
  - 날짜 데이터를 string 형태로 받아와 slice 하여 년, 월, 일 형태로 표시
<br>

3️⃣ . 당 월 소비 총액 표시
  - `new Date()` 객체를 이용하여 현 시점 month를 구한다.
  -  소비 날짜(string)을 slice하여 현 시점의 month와 비교
  -  같은 값의 항목의 소비 금액만을 변수 `totalAmount`에 담는다.
  -  totalAmount를 setState()에 담아준다.
  -  위 동작을 수행하는 함수를 `useEffect()`에 담아 useState()의 비동기적 특성에서 발생하는, 한 박자 늦게 보이는 문제점 해결

 <br>
 <br>

 ## 🔧 개선해야 할 점
  - 입력 Form에 유효성 검사 추가
  - Local Storge를 사용하여 브라우저를 새로 열어도 지속적으로 사용 가능하도록.
 
