import React from "react";
import Image from "next/image";
import NavLinks from "./components/NavLinks";

export default function About() {
    return (
        <div>
            <NavLinks/>
            <div className="flex justify-center md:block md:ml-10">
            <Image
                src="/ramen.jpg"
                alt="メイン画像"
                width={400}
                height={300}
                style={{objectFit: 'cover'}}
                className="opacity-80"
            />
            </div>
        </div>
    )
}