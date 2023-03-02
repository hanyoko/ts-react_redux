import React, { useState } from 'react';

type TodoInsertProps = {
    onInsert: (text:string) => void;
    // text: string
}
const TodoInsert = ({onInsert}:TodoInsertProps) => {
    //input 입력값 상태관리
    const [inputText, setInputText] = useState("");
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }
    const onClick = () => {
        onInsert(inputText);
        setInputText("")
    }
    return (
        <div>
            <input placeholder='할 일을 입력하세요'
            onChange={onChange} value={inputText} />
            <button onClick={onClick}>등록</button>
        </div>
    );
};

export default TodoInsert;