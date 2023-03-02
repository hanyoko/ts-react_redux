import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import { rootState } from '../modules';
import { addTodo, removeTodo, toggleTodo } from '../modules/todos';

const TodosContainer = () => {
    const todos = useSelector((state:rootState) => state.todos);
    const dispatch = useDispatch()
    const onToggle = (id:number) => {
        dispatch(toggleTodo(id));
    }
    const onInsert = (text:string) => {
        dispatch(addTodo(text));
    }
    const onRemove = (id:number) => {
        dispatch(removeTodo(id));
    }
    return (
        <div>
            <TodoInsert onInsert={onInsert} />
            <TodoList
            onRemove={onRemove}
            onToggle={onToggle}
            todos={todos}/>
        </div>
    );
};

export default TodosContainer;