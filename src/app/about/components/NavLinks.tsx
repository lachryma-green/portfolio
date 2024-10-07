import React from "react";
import Link from "next/link";

export default function NavLinks() {
    return (
        <div>
            <div className="flex justify-center gap-10 m-3">
                <Link href="/about" className="text-lg pr-3 pl-3 border-4">About</Link>
                <p className="text-lg pr-3 pl-3 border-4">SNS</p>
            </div>
        </div>
    )
}