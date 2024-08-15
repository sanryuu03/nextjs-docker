"use client";
import NavbarMobile from "@/components/navbar/mobile/NavbarMobile";
import { useState } from "react";
import { FcPlus, FcMinus } from "react-icons/fc";
import { VscDebugRestart } from "react-icons/vsc";

export default function Home() {
    const [count, setCount] = useState<number>(0);

    return (
        <div className="min-h-dvh mx-auto max-w-screen-sm border-2 border-lime-500 rounded-xl bg-sky-300 flex flex-col items-center justify-center">
            <div className="text-center mb-4">
                <p className="text-8xl font-semibold">You clicked {count} times</p>
            </div>
            <div className="flex space-x-32">
                <button onClick={() => setCount((currentNumber) => currentNumber - 1)} className="focus:outline-none">
                    <FcMinus size={100} />
                </button>
                <button onClick={() => setCount((currentNumber) => currentNumber + 1)} className="focus:outline-none">
                    <FcPlus size={100} />
                </button>
            </div>
            <div>
                <button onClick={() => setCount(0)} className="focus:outline-none">
                    <VscDebugRestart size={100} />
                </button>
            </div>
            <NavbarMobile />
        </div>
    )
}
