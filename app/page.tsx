"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
  className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/background.png')",
  }}
>

<div className="petal" style={{ left: "8%", animationDuration: "9s", animationDelay: "0s" }}>🌸</div>

<div className="petal" style={{ left: "18%", animationDuration: "12s", animationDelay: "2s" }}>🌸</div>

<div className="petal" style={{ left: "30%", animationDuration: "10s", animationDelay: "4s" }}>🌸</div>

<div className="petal" style={{ left: "45%", animationDuration: "11s", animationDelay: "1s" }}>🌸</div>

<div className="petal" style={{ left: "60%", animationDuration: "8s", animationDelay: "5s" }}>🌸</div>

<div className="petal" style={{ left: "74%", animationDuration: "13s", animationDelay: "3s" }}>🌸</div>

<div className="petal" style={{ left: "88%", animationDuration: "9s", animationDelay: "6s" }}>🌸</div>
      {/* Left flowers */}
      <div
        className="absolute left-0 top-0 h-full w-80 bg-left bg-no-repeat bg-contain opacity-90"
        style={{ backgroundImage: "url('/flowers-left.png')" }}
      />

      {/* Right flowers */}
      <div
        className="absolute right-0 top-0 h-full w-80 bg-right bg-no-repeat bg-contain opacity-90"
        style={{ backgroundImage: "url('/flowers-right.png')" }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center">

        {/* Heart */}
        <div
          className="heartbeat text-pink-500 text-7xl mb-6"
          style={{
            textShadow: "0 0 20px #ff4da6, 0 0 40px #ff4da6",
          }}
        >
          ♥
        </div>

        {/* Title */}
        <h1
          className="text-7xl font-bold"
          style={{
            color: "#ff6ab5",
            textShadow: "0 0 25px #ff4da6",
          }}
        >
          Our Journey
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-xl mt-5">
          Go Ahead Baby...
        </p>

        {/* Start button */}
        <Link href="/pin">
  <button
    className="mt-10 px-14 py-5 rounded-full text-2xl font-bold transition-all duration-300 hover:scale-110 active:scale-95"
    style={{
      background: "linear-gradient(90deg,#ff5ebc,#ff2e88)",
      color: "white",
      boxShadow:
        "0 0 15px #ff4da6, 0 0 35px #ff4da6, 0 0 60px #ff4da6",
    }}
  >
    Start <span className="text-pink-200">♥</span>
  </button>
</Link>

      </div>

    </main>
  );
}