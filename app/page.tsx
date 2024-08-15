"use client";
import NavbarMobile from "@/components/navbar/mobile/NavbarMobile";
import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-dvh mx-auto max-w-screen-sm border-2 border-lime-500 rounded-xl bg-sky-300">
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <NavbarMobile/>
        </div>
    )
}
