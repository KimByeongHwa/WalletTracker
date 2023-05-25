import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { spendingListState } from '../recoil/spendingListState';
import styles from './SpendingDetails.module.scss';

function SpendingDetails() {
    const [spendingList, setSpendingList] = useRecoilState(spendingListState);
    // console.log(spendingList);
    useEffect(() => {
        fetch('http://localhost:3000/data/spendinglist.json', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setSpendingList(data);
            });
    }, []);

    function deleteSpendingList() {}

    return (
        <div className={styles.SpendingDetails}>
            <div className={styles.title}>
                <strong className={styles.strong}>소비 항목</strong>
            </div>
            {spendingList.length > 0 ? (
                spendingList.map((list, idx) => {
                    let year = list.date.slice(0, 4);
                    let month = list.date.slice(4, 6);
                    let day = list.date.slice(6, 9);
                    return (
                        <div className={styles.list} key={idx}>
                            <div className={styles.date}>
                                {year}년 {month}월 {day}일
                            </div>
                            <div className={styles.description}>{list.description}</div>
                            <div className={styles.amout}>
                                {list.amount.toLocaleString('ko-KR')}원
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className={styles.none}>소비 항목이 없습니다.</div>
            )}
        </div>
    );
}

export default SpendingDetails;
