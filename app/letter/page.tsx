"use client";

import { useRef, useState } from "react";

export default function LetterPage() {
  const [clickMessage, setClickMessage] = useState("");
  const [loveLevel, setLoveLevel] = useState(75);
  const timeoutRef = useRef<number | null>(null);
  const trackSources = [
    "https://open.spotify.com/embed/track/6FMMd1fixOMmhplCevpjL7?utm_source=generator&si=50764b4117134662",
    "https://open.spotify.com/embed/track/0PG9fbaaHFHfre2gUVo7AN?utm_source=generator&si=46829aa410f8413f",
    "https://open.spotify.com/embed/track/7zycSpvjDcqh6YT1FEl2kY?utm_source=generator&si=b149b3fa0fd94817",
    "0VjIjW4GlUZAMYd2vXMi3b",
  ];

  function createEmbedUrl(source: string) {
    if (source.startsWith("https://open.spotify.com/embed/track/")) {
      return source;
    }

    const match = source.match(/([A-Za-z0-9]{22})$/);
    return match ? `https://open.spotify.com/embed/track/${match[1]}` : null;
  }

  function handleClick() {
    setClickMessage("I love you 💗");
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setClickMessage("");
      timeoutRef.current = null;
    }, 3000);
  }

  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full relative overflow-hidden bg-white rounded-3xl shadow-xl p-8 text-center">
        <div className="pointer-events-none absolute inset-0">
          {[
            { left: "8%", delay: "0s", duration: "8s" },
            { left: "22%", delay: "1.2s", duration: "10s" },
            { left: "40%", delay: "0.6s", duration: "9s" },
            { left: "58%", delay: "1.8s", duration: "11s" },
            { left: "74%", delay: "0.9s", duration: "8.5s" },
          ].map((heart, index) => (
            <span
              key={index}
              className="heart-drop absolute text-3xl text-pink-500"
              style={{
                left: heart.left,
                animationDelay: heart.delay,
                animationDuration: heart.duration,
              }}
            >
              ♥
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-bold text-pink-600 mb-6">
          For You <span className="text-pink-600">♥</span>
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
          Dear Love Swethati,

          {"\n\n"}

          Dear Love, Swethati,

I love you a lot, and I know that sometimes I don't do enough for you, so I made this website with the help of ChatGPT 😭.

I just want to take a moment of my time to tell you how much I love and appreciate you, and to remind you that I love you so much. Even if thousands of miles keep us apart, you are constantly on my mind and in my heart.

Every morning, waking up knowing that you're in my life makes my day so much better. You bring a kind of happiness into my world that I never really knew before I met you. I find myself smiling whenever I think about you your smile, your gorgeous eyes, and your beautiful hair.

I know that the distance is really painful, but one day we'll meet and start a life together. I know it. I wish I could hug you or hold your hand, but every second of missing you hurts. Still, it will all be worth it in the end, because you are worth everything.

You are my favorite thought, my biggest motivation, and my greatest comfort. I'm so grateful to call you mine. I wish I could be with you when you need me, and even when you don't.

But until we meet, just always know that I'm with you and that I'm cheering you on, loving you endlessly from right here.

Yours always,
Your love,
Akmed

          
          {"\n\n"}

          Love,
          {"\n"}
          Akmed <span className="text-pink-600">♥</span>
        </p>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-pink-500 mb-5">
            Our Songs 🎵
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {trackSources.map((source, index) => {
              const src = createEmbedUrl(source);

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-pink-200 bg-pink-50 p-4 text-left text-gray-700"
                >
                  <p className="text-xl font-semibold text-pink-500 mb-3">
                    Song {index + 1}
                  </p>

                  {src ? (
                    <iframe
                      title={`song-${index + 1}`}
                      src={src}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-3xl bg-white"
                    />
                  ) : (
                    <div className="rounded-3xl bg-white p-4 text-sm text-gray-500">
                      Invalid Spotify track ID. Use a valid Spotify embed URL or track ID.
                    </div>
                  )}

                  <p className="mt-3 text-sm text-gray-500">
                    Replace the source URL above with your own Spotify embed link or track ID.
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="w-full flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex-1 rounded-3xl border border-pink-200 bg-pink-50 p-4 text-left text-gray-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-semibold text-pink-500">
                  how much do u love me :3
                </span>
                <span className="text-pink-600 font-semibold">{loveLevel}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="101"
                value={loveLevel}
                onChange={(event) => setLoveLevel(Number(event.target.value))}
                className="w-full accent-pink-500"
              />
            </div>

            <div className="relative h-60 w-36 rounded-3xl border border-pink-300 bg-pink-50 p-3 text-center text-gray-700 shadow-sm">
              <div className="absolute inset-x-3 bottom-3 rounded-t-3xl bg-pink-200 transition-all duration-300"
                style={{ height: `${Math.min(loveLevel, 100)}%` }}
              />
              <div className="absolute inset-x-3 bottom-3 flex flex-col items-center justify-end gap-1 overflow-hidden h-full">
                {Array.from({ length: Math.min(6, Math.ceil(Math.min(loveLevel, 100) / 18)) }).map((_, index) => (
                  <span key={index} className="text-pink-500 text-2xl leading-none">
                    ♥
                  </span>
                ))}
              </div>
              {loveLevel > 100 ? (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                  <span className="text-pink-500 text-3xl animate-bounce">♥</span>
                  <span
                    className="text-pink-500 text-3xl animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  >
                    ♥
                  </span>
                </div>
              ) : null}
              <div className="absolute inset-x-0 bottom-0 h-4 rounded-b-3xl bg-pink-300" />
              <div className="absolute inset-x-0 top-0 h-10 border-b border-pink-300" />
              <div className="relative z-10 mt-2 text-sm font-semibold text-pink-600">
                bucket
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClick}
            className="rounded-full bg-pink-500 px-8 py-3 text-white text-lg font-semibold shadow-lg shadow-pink-300/50 transition hover:scale-105"
          >
            Click me
          </button>
          {clickMessage ? (
            <p className="text-pink-600 text-xl font-semibold">{clickMessage}</p>
          ) : null}
        </div>

        {clickMessage ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6 py-10">
            <div className="max-w-4xl rounded-[2rem] bg-white/95 px-8 py-12 text-center shadow-2xl shadow-pink-300/50">
              <p className="text-[clamp(3rem,8vw,8rem)] font-black uppercase text-pink-600">
                {clickMessage}
              </p>
            </div>
          </div>
        ) : null}

      </div>
    </main>
  );
}