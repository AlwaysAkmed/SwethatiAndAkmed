"use client";

export default function LetterPage() {
  const trackSources = [
    "7ouMYWpwJ422jRcDASZB7P",
    "3Qm86XLflmIXVm1wcwkgDK",
    "2TpxZ7JUBn3uw46aR7qd6V",
    "0VjIjW4GlUZAMYd2vXMi3b",
  ];

  function createEmbedUrl(source: string) {
    if (source.startsWith("https://open.spotify.com/embed/track/")) {
      return source;
    }

    const match = source.match(/([A-Za-z0-9]{22})$/);
    return match ? `https://open.spotify.com/embed/track/${match[1]}` : null;
  }

  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 text-center">

        <h1 className="text-4xl font-bold text-pink-600 mb-6">
          For You ❤️
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
          Akmed ❤️
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

      </div>
    </main>
  );
}