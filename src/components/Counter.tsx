import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const Counter = (): React.JSX.Element => {
    // const [count, setCount] = React.useState<number>(0);

    const {count, increment, decrement} = useCounter({initialValue: 0});

    return (
        <>
            <p>Count: {count}</p>
            {/* <button onClick={() => setCount(count => count + 1)}>Increment</button> */}
            <button onClick={() => increment()}>Increment</button>
            {/* <button onClick={() => setCount(count => count - 1)}>Decrement</button> */}
            <button onClick={() => decrement()}>Decrement</button>
        </>
    )
};