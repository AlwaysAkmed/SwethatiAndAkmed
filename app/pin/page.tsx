"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PinPage() {
    const router = useRouter();
  const [pin, setPin] = useState("");

  const correctPin = "2009"; // Change this to any PIN you want

  function press(num: string) {
    if (pin.length >= 4) return;

    const newPin = pin + num;
    setPin(newPin);

    if (newPin.length === 4) {
      setTimeout(() => {
        if (newPin === correctPin) {
          router.push("/letter");
          // We'll change this to go to the next page later.
        } else {
          alert("Wrong PIN 💔");
          setPin("");
        }
      }, 200);
    }
  }

  function clearPin() {
    setPin(pin.slice(0, -1));
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      <div
        className="p-8 rounded-3xl text-center"
        style={{
          background: "rgba(0,0,0,.45)",
          backdropFilter: "blur(15px)",
        }}
      >
        <h1 className="text-4xl text-pink-300 font-bold mb-4">
          Enter PIN ❤️
        </h1>

        <div className="flex justify-center gap-3 mb-8">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full border-2 border-pink-400"
              style={{
                background: i < pin.length ? "#ff4da6" : "transparent",
              }}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[1,2,3,4,5,6,7,8,9].map((n)=>(
            <button
              key={n}
              onClick={()=>press(String(n))}
              className="w-20 h-20 rounded-full text-2xl font-bold"
              style={{
                background:"#ff4da6",
                color:"white",
              }}
            >
              {n}
            </button>
          ))}

          <button
            onClick={clearPin}
            className="w-20 h-20 rounded-full bg-gray-700"
          >
            ⌫
          </button>

          <button
            onClick={()=>press("0")}
            className="w-20 h-20 rounded-full text-2xl font-bold"
            style={{
              background:"#ff4da6",
              color:"white",
            }}
          >
            0
          </button>

          <div />
        </div>
      </div>
    </main>
  );
}