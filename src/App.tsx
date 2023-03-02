import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

// interface Person {
//   name: string
// }
// const person1:Person = {
//   name: "green",
//   age: 30   //타입체크를 해준다. 이럴 때 쓰는 것이 as
// }
// //타입 단언
// const person2 = {name: "blue", age: 30} as Person

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <TodosContainer />
    </div>
  );
}

export default App;
