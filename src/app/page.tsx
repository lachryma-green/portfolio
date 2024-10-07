"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {motion, AnimatePresence} from "framer-motion"
import { useState, useEffect } from "react";

export default function Home() {
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hello, World!!";
  const typeSpeed = 150;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogoVisible(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText(fullText.slice(0,displayText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(typingTimer);
    }
  }, [displayText, fullText]);

  
  
  return (
    <div>
      <AnimatePresence>
        {isLogoVisible && (
          <motion.div
            key="logo"
            initial={{ opacity: 1}}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
          >
            <div className="flex text-center flex-col">
              <p className="text-5xl md:text-6xl font-bold">
                {displayText}
                <span>
                  ｜
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-gray-100">
        <nav className="flex justify-center gap-10 p-5 shadow-md">
          <Link tabIndex={-1}  href="#about" className="text-lg font-semibold pr-3 pl-3 hover:text-blue-600 transition">About</Link>
          <Link tabIndex={-1} href="#sns" className="text-lg font-semibold pr-3 pl-3 hover:text-blue-600 transition">SNS</Link>
        </nav>
      </div>
      
      <div className="relative w-full md:h-screen h-96">
        <Image
          src="/main.jpg"
          alt="メイン画像"
          layout="fill"
          style={{objectFit: 'cover', objectPosition: 'top'}}
          className="opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <p className="text-6xl md:text-8xl font-bold leading-none">SHINNOSUKE</p>
          <p className="text-6xl md:text-8xl font-bold leading-none">UMEKAWA</p>
        </div>
      </div>
      
      <section id="about" className="py-12 bg-blue-50">
        <div id="about" className="text-2xl md:text-3xl text-center font-bold mb-10">About</div>
          <div className="container mx-auto flex flex-col m-8 text-center items-center md:flex-row items-center justify-center">
            <Image
              src="/ramen.jpg"
              alt="プロフィール画像"
              width={400}
              height={300}
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
            <div className="mt-8 text-center max-w-md md:mt-0 md:ml-12 md-text-left">
              <p className="text-2xl font-bold underline md:text-3xl">Shinnosuke Umekawa</p>
              <p className="mt-4  md:text-lg">岩手県出身の大学4年生。</p>
              <p className="mt-4 md:text-lg">セキュリティとWeb制作に興味あり。</p>
              <p className="mt-4 md:text-lg">趣味はアニメと音楽鑑賞。</p>
              <p className="mt-4 md:text-lg">好きな食べ物はラーメン。</p>
            </div>
          </div>
        </section>
      
        <section id="sns" className="py-12 bg-blue-100">
          <div className="text-2xl md:text-3xl text-center font-bold mb-10">SNS</div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/twitter_x_new_logo_x_rounded_icon_256078.webp"
                  alt="Xロゴ"
                  width={30}
                  height={30}
                  className=""
                />
                <p className="text-lg">
                  X(Twitter): <Link href="https://x.com/lachryma_green" className="text-blue-600 hover:underline">@lachryma_green</Link>
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Image
                  src="/github-mark.png"
                  alt="Githubロゴ"
                  width={22}
                  height={22}
                  className=""
                />
              <p className="text-lg">
                Github: <Link href="https://github.com/lachryma-green" className="text-blue-600 hover:underline">@lachryma-green</Link>
              </p>
            </div>
          </div>
        </section>
        

      <footer className="text-center bg-gray-700 text-white py-3">
        &copy; 2024 SHINNOSUKE UMEKAWA
      </footer>
    </div>
  );
}