import "./Todolist.css";
import { useRef, useState } from "react";

function Todolist({ count, progress, setCount, setProgress }) {
    const [id, setId] = useState(0);
    const [data, setData] = useState([]);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const progressIncrement = () => {
        setProgress(progress + 1);
    };

    const progressDecrement = () => {
        setProgress(progress - 1);
    };

    const refi = useRef(null);

    const taskPush = () => {
        setId(id + 1);
        increment();
        if (refi.current.value.trim() === "") {
            document.querySelector(".err-msg").innerHTML = "Please enter a valid task";
            return;
        } else {
            document.querySelector(".err-msg").innerHTML = "";
        }
        setData([
            ...data,
            {
                id: id,
                task: refi.current.value,
                done: false,
                date: new Date(),
            },
        ]);
        refi.current.value = "";
    };

    return (
        <div className="Todo--app">
            <div className="task--input">
                <input
                    type="text"
                    ref={refi}
                    placeholder="Add a new task"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            taskPush();
                        }
                    }}
                />
                <button onClick={taskPush}>+</button>
            </div>
            <div className="err-msg"></div>

            <div className="task--list">
                {data.length > 0 && (
                    <ul>
                        {data.map((e) => (
                            <li key={e.id}>
                                <div>
                                    <div className="row1">
                                        <h3>{e.id}: </h3>
                                        <p>{e.task}</p>
                                    </div>
                                    <div className="row2">
                                        <h4 id="time-ele">{e.date.toLocaleString()}</h4>
                                        <div className="button-container">
                                            <button
                                                onClick={() => {
                                                    setData(
                                                        data.map((ele) => {
                                                            if (ele.id === e.id) {
                                                                ele.done = !ele.done;
                                                                if (ele.done) {
                                                                    progressIncrement();
                                                                } else {
                                                                    progressDecrement();
                                                                }
                                                            }
                                                            return ele;
                                                        })
                                                    );
                                                }}
                                                id="done-btn"
                                                style={
                                                    e.done
                                                        ? { backgroundColor: "yellow" }
                                                        : { backgroundColor: "white" }
                                                }
                                            >
                                                {" "}
                                                {e.done ? "✔" : "."}
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setData(data.filter((ele) => ele.id !== e.id));
                                                    if (e.done) {
                                                        progressDecrement();
                                                    }
                                                    decrement();
                                                }}
                                                id="remove-btn"
                                            >
                                                X
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Todolist;