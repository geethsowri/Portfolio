"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import About from "~/components/About";
import Education from "~/components/Education";
import Experience from "~/components/Experience";
import Socials from "~/components/Socials";

export default function HomePage() {
  const [nasaImg, setNasaImg] = useState("");
  const [nasaTitle, setNasaTitle] = useState("");

  useEffect(() => {
    async function fetchNasaAPOD() {
      try {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=R1FVWdYiCNHztUfdkuHg5X2WQ9lAPgY1Mllkpyfe`
        );
        const data = await res.json();
        console.log(data);
        console.log("NASA APOD:", data);
        if (data.media_type === "image") {
          setNasaImg(data.url);
          setNasaTitle(data.title);
        }
      } catch (e) {
        console.error("Failed to fetch NASA APOD", e);
      }
    }

    fetchNasaAPOD();
  }, []);

  return (
    <main className="min-h-screen text-white p-10 md:p-10 lg:p-24 max-w-6xl mx-auto">
      <div className="mt-6 md:mt-0 mb-10 flex flex-row items-center gap-5 border border-zinc-800 p-4">
        <div className="overflow-hidden flex items-center justify-center">
          <Image
            src="/geethsowri.jpg"
            alt="Profile Image"
            width={60}
            height={60}
            className="object-cover grayscale rounded-sm"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">sowri</h1>
          <p className="text-sm text-gray-400">@an_astronaut</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <About />
        <Experience />
        <Education />
        <Socials />
      </div>

      {nasaImg && (
        <div className="mt-10">
          <h2 className="text-sm text-gray-500 mb-2">
            {`nasa ${new Date().toISOString().split("T")[0]}, ${
              nasaTitle || "loading..."
            }`.toLowerCase()}
          </h2>

          <div className="w-full h-60 relative overflow-hidden rounded-xl border border-zinc-800">
            <img
              src={nasaImg}
              alt={nasaTitle}
              className="w-full h-60 object-cover rounded-xl"
              title={nasaTitle}
            />
          </div>
        </div>
      )}
    </main>
  );
}