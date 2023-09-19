import "./Todolist.css"
import { useRef, useState } from "react";
import useCount from "./useCount";


function Todolist() {

const [count, increment, decrement, progress, progressIncrement, progressDecrement] = useCount();
    const refi = useRef(null);
    const [data, setData] = useState();

    const taskPush = () => {
        increment();
        data ? setData([...data, { id: count, task: refi.current.value, done: false, 
            date:new Date()
        }]) : setData([{ id: count, task: refi.current.value, done: false,date:new Date() }]);
        refi.current.value = "";
    }

    return (<div className="Todo--app">
        <div className="task--input">
            <input type="text" ref={refi} placeholder="Add a new task" onKeyDown={
                (e) => {
                    if (e.key === "Enter") {
                        taskPush();
                    }
                }
            } />

            <button onClick={taskPush}>+</button>
        </div>
        <div className="task--list">
            {data ? <ul>
                {data.map((e) => {
                    return <li key={e.id}>
                        <h3>{e.id+" "}</h3>
                        <p>{e.task+" "}</p>
                        <h4 id="time-ele">{e.date.toLocaleString()+" "}</h4>

                        <button onClick={
                            () => {
                                setData(data.map((ele) => {
                                    if (ele.id === e.id) {
                                        ele.done = !ele.done;
                                        ele.done ? progressIncrement() : progressDecrement();
                                    }
                                    return ele;
                                }))
                            }
                        } id="done-btn" style={e.done?{backgroundColor:"yellow"}:{backgroundColor:"white"}}> {e.done ? "✔" : '.'}</button><button onClick={
                            () => {
                                setData(data.filter((ele) => ele.id !== e.id))
                            }
                        } id="remove-btn">X</button></li>
                })}
            </ul> : null}
        </div>
    </div>);
}

export default Todolist;