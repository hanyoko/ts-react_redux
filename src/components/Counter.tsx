import React from 'react';

//상태값 count
//상태 업데이트 함수 onIncrease, onDecrease
type CounterProps = {
    count: number,
    onIncrease: () => void;     //함수
    onDecrease: () => void;
}
const Counter = ({count, onIncrease, onDecrease}:CounterProps) => {
    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
};

export default Counter;
