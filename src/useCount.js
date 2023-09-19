import { useState } from "react";

export default function useCount() {
    const [count, setCount] = useState(0);
    const [progress, setProgress] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const progressIncrement = () => {
        setProgress(progress+1);
    }
    const progressDecrement = () => {
        setProgress(progress-1);
    }

    return [count, increment, decrement, progressIncrement, progressDecrement, progress];
}