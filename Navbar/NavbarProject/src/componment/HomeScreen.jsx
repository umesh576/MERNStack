import React from "react";

const HomeScreen = () => {
  return (
    <div className="w-screen h-100vh border-amber-950">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-120  object-cover -z-10"
        >
          <source src="/public/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content over the video */}
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="flex gap-1">
            <input
              type="text"
              className="border-2 border-black rounded-2xl z-10 h-15 w-90 text-white text-lg placeholder-white place-self-stretch"
              placeholder="  Search your needed job"
            />
            <button
              className="h-15 w-50 rounded-2xl"
              style={{ backgroundColor: "orange" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <button type="button">Give Job</button>
      </div>
    </div>
  );
};

export default HomeScreen;
