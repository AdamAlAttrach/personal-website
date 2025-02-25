import * as React from "react"

export function AboutMe() {
    return (
        <div className="flex flex-col items-start">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-9xl">
                Ada<span className="red-shadow">m</span><br></br> Al-Attrach
            </h1>
            <p className="scroll-m-20 mt-4 text-lg text-gray-500 lg:text-2xl max-w-xl about-p">
                Hullo! I’m Adam Al-Attrach—born and raised in Montréal, Canada. 
                I am studying Computer Science/Statistics at McGill. I love solving problems and learning along the way. 
                In my spare time, you’ll find me reading, working out, or working on personal projects.
            </p>
        </div>
    )
}
