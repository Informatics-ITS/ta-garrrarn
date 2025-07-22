"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import DashboardHeader from "./dashboard/_components/DashboardHeader";

export default function Home() {
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
  }, []);

  return (
    <div className="scroll-smooth snap-y snap-mandatory h-screen overflow-scroll">
      <div className="fixed top-0 left-0 w-full z-50">
        <DashboardHeader />
      </div>

      {/* Hero Section */}
      <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gold-400 via-cream-300 to-brown-500 text-brown-900">
        <div className="py-20 px-6 text-center">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-fade-in text-brown-800">
              Smart Course <span className="text-gold-600">Builder</span>
              <br /> Didukung dengan AI
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light mb-8 text-brown-700">
              Mendesain dan Mengatur Jalur Pembelajaran dengan Mudah
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/dashboard"
                className="inline-flex items-center py-3 px-6 text-md font-medium text-white bg-black rounded-full shadow-lg hover:bg-gray-800 hover:shadow-xl transition duration-300 ease-in-out"
              >
                Mulai
              </a>

              <a
                href="#features"
                className="inline-flex items-center py-3 px-6 text-md font-medium text-white bg-black rounded-full shadow-lg hover:bg-gray-800 hover:shadow-xl transition duration-300 ease-in-out"
              >
                Pelajari lebih lanjut
              </a>
            </div>
          </div>
        </div>

        {/* Floating Images di Bagian Bawah */}
        <div className="relative mt-10">
          <Image
            src={"/study.png"}
            alt="study"
            width={120}
            height={120}
            className="absolute bottom-0 left-10 animate-float-btm"
          />
          <Image
            src={"/code2.png"}
            alt="code"
            width={120}
            height={120}
            className="absolute bottom-0 right-10 animate-float-btm"
          />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={featuresRef}
        className="snap-start min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-20 text-black">
            Kenapa menggunakan{" "}
            <span className="text-black">ClassEngine.AI</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out bg-cream-100">
              <Image
                src={"/aii.png"}
                alt="feature 1"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-brown-800">
                AI-Powered Suggestions
              </h3>
              <p className="text-brown-600">
                Memanfaatkan kekuatan AI untuk membuat jalur pembelajaran yang dipersonalisasi.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out bg-cream-100">
              <Image
                src={"/ft2.png"}
                alt="feature 2"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-brown-800">
                Interactive Content
              </h3>
              <p className="text-brown-600">
                Libatkan pengguna dengan quiz dan flashcard interaktif.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out bg-cream-100">
              <Image
                src={"/ft3.png"}
                alt="feature 3"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-brown-800">
                Easy Management
              </h3>
              <p className="text-brown-600">
                Organisasi kursus yang dapat digunakan beberapa kali.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
