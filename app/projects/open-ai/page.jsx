"use client";

import Divider from "../../../components/blocks/Divider";
import Link from "next/link";
import PasswordDialog from "../../../components/PasswordDialog";
import MediaTag from "../../../components/MediaTag";

export default function OpenAI() {
    return (
        <main className="w-full max-w-dvw flex flex-col justify-center">
            <div>
                <section className="m-8 my-12 flex flex-col justify-center items-center gap-16 [&>section]:max-w-3xl [&>div]:max-w-3xl [&>section]:w-full [&>div]:w-full">
                    <div className="flex w-full">
                        <Link href="/" className="flex gap-5 self-start w-full cursor-gauntlet">
                            <img src="/back.svg" className="mt-1" alt="Back" />
                            <span className="text-lg font-pixel text-white transition-colors duration-200">
                                Return
                            </span>
                        </Link>
                    </div>

                    <section id="overview" className="flex flex-col gap-4">
                        <h1 className="large-title mb-6">Making ChatGPT truly personal with an AI-powered wearable that remembers</h1>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div>
                                <h2 className="headline-sm mb-1.5">Team</h2>
                                <span className="body-sm">Christina Raganit, Rachel Chen, Emmi Wu
                                </span>
                            </div>

                            <div>
                                <h2 className="headline-sm mb-1.5">My Roles</h2>
                                <span className="body-sm">Product Design, Visual Design, Interface Design, Interaction Design, Systems Thinking
                                </span>
                            </div>

                            <div>
                                <h2 className="headline-sm mb-1.5">Duration</h2>
                                <span className="body-sm">August – September 2025 (6 weeks)
                                </span>
                            </div>
                        </div>

                        <video src="/projects/open-ai-thumbnail.mp4" loop muted autoPlay className="mt-2 mb-8" />

                        <h2 className="title-1 mb-1">What should OpenAI build as their first hardware device?</h2>

                        <p className="">My teammates and I sought to answer this question, exploring the hardware × AI landscape, ideating a bunch of concepts, testing them with users, and iterating upon the feedback we received from designers in the industry (we even presented to a designer who worked on the Humane Pin!). Eventually, we landed on an ambient wearable we called Tomo.
                        </p>
                    </section>

                    <div id="problem" className="flex flex-col justify-center items-center gap-16">
                        <Divider></Divider>
                        <div className="my-4">
                            <h2 className="headline-sm mb-3">Problem</h2>
                            <h2 className="title-1 mb-4">Currently, ChatGPT’s knowledge of you is limited to what you tell it.
                            </h2>
                            <p>Memory in ChatGPT is only capable of being stored as text entries, like: “Christina is a product designer” and “Christina’s lactose intolerant”. It doesn’t have context of what you’re currently doing, and because it’s limited to what you tell it, it’s not as useful as it could be.
                            </p>

                        </div>
                        <Divider></Divider>
                    </div>

                    <div id="tomo" className="flex flex-col justify-center items-center gap-16">
                        <div className="">
                            <h2 className="headline-sm mb-3">Solution</h2>
                            <h2 className="title-1 mb-4">Introducing Tomo: an AI-powered, ambient wearable that acts as ChatGPT's eyes and ears.
                            </h2>
                            <p>With a camera, mic, and pin at the back, you can wear it as a pin or a pendant. Tomo is a wearable that acts as the eyes and ears of ChatGPT. By seeing and hearing what happens in your day, it builds a living memory of your life — powering “Moments”.
                            </p>
                        </div>

                        <div>
                            <img src={"/projects/open-ai/product-shot.png"} className="w-full -mt-6 mb-6" />
                            <img src={"/projects/open-ai/product-shots.png"} className="w-full" />
                        </div>


                        <Divider></Divider>
                    </div>


                    <div id="moments" className="flex flex-col justify-center items-center gap-6">
                        <div className="">
                            <h2 className="headline-sm mb-3">Moments</h2>
                            <h2 className="title-1 mb-4">Tomo powers Moments: capturing your everyday in ChatGPT.
                            </h2>
                            <p className="mb-4">Moments is a new atomic unit in ChatGPT, a log of all the events and conversations and solo adventures captured by Tomo. Moments powers up the existing features of ChatGPT like smart suggestions and reminders to be more personalized to the user and to be stickier.
                            </p>
                            <p className="mb-4">Why? Because the AI that knows you the best is the one that you won't want to switch off of.</p>
                        </div>
                        <img src={"/projects/open-ai/moments.png"} className="w-full" />
                        <img src={"/projects/open-ai/moments-in-chat.png"} className="w-full" />
                    </div>

                    <section id="deck" className="flex flex-col h-full items-center [&>section]:max-w-3xl [&>div]:max-w-3xl -mt-8">
                        <div className="flex w-full">

                        </div>
                        <div className="h-full w-full flex-1 items-center justify-center flex">
                            <PasswordDialog buttonText="VIEW DECK ON FIGMA" url="https://www.figma.com/deck/JPi17dzVYpvfEFNjG0kkT6/OpenAI-x-Hardware--v3-?node-id=1-6524&viewport=580%2C177%2C0.04&t=fO0ZncpgtLqOQE80-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" highlightMode={true} type="highlight" title="The rest of this case study is currently in progress." paragraph="Sorry about that ;_; In the meantime, you can view this slide deck to learn more about the project!" />
                        </div>
                    </section>
                </section>
            </div>

        </main >)
}