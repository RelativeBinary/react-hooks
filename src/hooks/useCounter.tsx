import React from 'react'; 

export interface useCounterProps {
    initialValue: number;
}

export const useCounter = ({initialValue}: useCounterProps) => {
    const [count, setCount] = React.useState<number>(initialValue);

    const increment = () => setCount(count => count + 1);
    const decrement = () => setCount(count => count - 1);

    return {count, increment, decrement};
}