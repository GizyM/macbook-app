import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 mt-10">
        <h1 className="text-4xl font-semibold">MacBook Pro</h1>

        <img
          src="/title.png"
          alt="MacBook Title"
          className="mx-auto mt-2 w-[300px]"
        />
      </div>

      {/* Video */}
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
        loop
        className="w-full max-w-[1200px] mt-6"
      />

      {/* CTA */}
      <div className="mt-6 flex flex-col items-center gap-3">
        <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Buy
        </button>

        <p className="text-gray-500 text-sm">
          From $1599 or $133/mo for 12 months
        </p>
      </div>
    </section>
  );
};

export default Hero;