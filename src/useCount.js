import React from "react";
import { useState } from "react";

export const useCount = () => {
    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 1);
    }

    const minus = () => {
        setCount(count - 1);
    }

    return {count, plus, minus}
}
