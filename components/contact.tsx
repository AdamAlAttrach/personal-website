import * as React from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Contact() {
    return (
        <div className="flex flex-row justify-evenly items-start mt-20 contact">
            <Link href="https://www.linkedin.com/in/adamalattrach/" target="_blank" rel="noreferrer" className="scroll-m-20 text-lg lg:text-2xl max-w-xl contact-item">
                Linkedin
            </Link>
            <Link href="https://github.com/AdamAlAttrach" target="_blank" rel="noreferrer" className="scroll-m-20 text-lg lg:text-2xl max-w-xl contact-item">
                GitHub
            </Link>

            <Link href="/resume.pdf" target="_blank" rel="noreferrer" className="scroll-m-20 text-lg lg:text-2xl max-w-xl contact-item">
                Resume
            </Link>
        </div>
    )
}
