import { useState } from 'react';

function ToDo(props) {
    const [check, setCheck] = useState(props.completed); // Access the 'completed' prop

    function handleCheck(event) {
        setCheck(event.target.checked);
    }

    return (
        <>
            <p>{props.title}</p>
            <p>UzerId: {props.userId}</p>
            <p>id: {props.id}</p>
            <p>title: {props.title}</p>
 

            <input type="checkbox" checked={check} onChange={handleCheck}></input>
        </>
    );
}

export default ToDo;
