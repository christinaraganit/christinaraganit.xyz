"use client";

import Divider from "../../../components/blocks/Divider";
import Link from "next/link";
import PasswordDialog from "../../../components/PasswordDialog";
import PixelBorderBox from "../../../components/PixelBorderBox";

export default function FigmaMobile() {
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
                        <PixelBorderBox size="md" color="duotone" className="w-full mb-8">
                            <div className="flex flex-row gap-6 items-center">
                                <img src="/inventory/first-place.svg" className="mt-1 h-10" draggable={false} />
                                <div className="">
                                    <h2 className="title-2 mb-1.5">
                                        Achieved 1st place in the SVSD NY Design Battle
                                    </h2>
                                    <p className="text-balance text-sm">
                                        Hell yeah! Shout out to my teammates Angelina, Rachel, and Emmi {"<3"}
                                    </p>
                                </div>
                            </div>
                        </PixelBorderBox>

                        <h1 className="large-title mb-6">Designing a lightweight, cross-platform feedback delivery system in Figma</h1>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div>
                                <h2 className="headline-sm mb-1.5">Team</h2>
                                <span className="body-sm">Christina Raganit, Angelina Cao, Emmi Wu, Rachel Chen
                                </span>
                            </div>

                            <div>
                                <h2 className="headline-sm mb-1.5">My Roles</h2>
                                <span className="body-sm">Product Design, Visual Design, Interface Design, Interaction Design, Systems Thinking
                                </span>
                            </div>

                            <div>
                                <h2 className="headline-sm mb-1.5">Duration</h2>
                                <span className="body-sm">October 2025 (1½ weeks)
                                </span>
                            </div>
                        </div>

                        <video src="/projects/open-ai-thumbnail.mp4" loop muted autoPlay className="my-2" />

                        <p className="body-lg">During these 8 weeks, I'll be working with the team at Wonder and the design studio Spacing to design and prototype AI features that seamlessly integrate into Wonder's design tool. Our goal is to find ways that Wonder can differentiate itself in the competitive design tool market by leveraging AI to enhance user productivity and creativity.
                        </p>

                        <p className="body-lg">Currently exploring: agentic workflows, context-aware design assistance, and how multiplayer collaboration tools can leverage AI.
                        </p>

                        <main className="w-full max-w-dvw flex flex-col justify-center">
                            <section id="case-study" className="flex flex-col h-full items-center [&>section]:max-w-3xl [&>div]:max-w-3xl">
                                <div className="flex w-full">

                                </div>
                                <div className="h-full w-full flex-1 items-center justify-center flex">
                                    <PasswordDialog buttonText="VIEW DECK ON FIGMA" url="https://www.figma.com/deck/JPi17dzVYpvfEFNjG0kkT6/OpenAI-x-Hardware--v3-?node-id=1-6524&viewport=580%2C177%2C0.04&t=fO0ZncpgtLqOQE80-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" highlightMode={true} type="highlight" title="This case study is currently in progress." paragraph="In the meantime, you can view this slide deck to learn more about the project." />
                                </div>
                            </section>

                        </main>
                    </section></section>

            </div>

        </main >)
}