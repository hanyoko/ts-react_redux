import { createReducer, ActionType, deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;
//액션타입, 액션생성함수, 리듀서
//1. 액션타입
//action.type이 string으로 추론되지않고 'counter/INCREASE'와 같이
//실제 문자열으로 추론되도록 as const 붙인다.
const INCREASE = "counter/INCREASE";   //타입단언
const DECREASE = "counter/DECREASE";   //타입단언

//2.액션생성함수 return { type: INCREASE, payload: diff }
//액션객체에 type 속성만 있는 경우
export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();

//state, action의 타입 설정
//action 객체에 대한 타입
const actions = { increase, decrease };     //액션 생성함수

//ActionType을 사용하여 모든 액션 객체들의 타입을 지정
type CounterAction = ActionType<typeof actions>

//state에 대한 타입
type CounterState = { count: number }
//초기상태
const initialState: CounterState = { count: 0 }

//3.리듀서

//리듀서1
const counter = createReducer<CounterState,CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1 }),
    [DECREASE]: state => ({ count: state.count - 1 })
})
//리듀서2
// const counter = createReducer<CounterState, CounterAction>(initialState)
// .handleAction(INCREASE, state = ({ count: state.count + 1 }))
// .handleAction(DECREASE, state = ({ count: state.count - 1 }))

export default counter;

