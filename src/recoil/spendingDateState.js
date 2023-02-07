import { atom } from "recoil";

export const spendingDateState = atom({
    key: "spendingListDate",
    default: new Date(),
});
