import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { rootState } from '../modules';
import { decrease, increase } from '../modules/counter';

const CounterContainer = () => {
    //상태조회
    const count = useSelector((state:rootState)=>state.counter.count)
    const dispatch = useDispatch();

    //디스패치함수
    const onIncrease = () => {
        dispatch(increase())
    }
    const onDecrease = () => {
        dispatch(decrease())
    }
    return (
        <Counter count={count} onDecrease={onDecrease} onIncrease={onIncrease} />
    );
};

export default CounterContainer;