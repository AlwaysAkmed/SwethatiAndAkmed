"use client";

export default function LetterPage() {
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

          <div className="space-y-5">

            {/* Spotify Song 1 */}
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/0PG9fbaaHFHfre2gUVo7AN"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

            {/* Spotify Song 2 */}
            <iframe
              style={{ borderRadius: "12px" }}
              src="YOUR_SPOTIFY_EMBED_LINK_2"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

            {/* Spotify Song 3 */}
            <iframe
              style={{ borderRadius: "12px" }}
              src="YOUR_SPOTIFY_EMBED_LINK_3"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

            {/* Spotify Song 4 */}
            <iframe
              style={{ borderRadius: "12px" }}
              src="YOUR_SPOTIFY_EMBED_LINK_4"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </main>
  );
}