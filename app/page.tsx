"use client";
import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-dvh">
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}
