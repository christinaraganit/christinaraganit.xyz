"use client"

import Divider from "../../../components/blocks/Divider";
import VerticalNav from "../../../components/Navigation";
import Link from "next/link";
import DesignChallenge from "../../../components/blocks/DesignChallenge";
import PixelBorderBox from "../../../components/PixelBorderBox";

export default function Felix() {
    return (<main className="w-full max-w-dvw flex flex-col justify-center">
        <div>
            <aside id="case-study-navigation" className="fixed left-[5%]">
                <VerticalNav />
            </aside>
            <section id="case-study" className="m-8 my-12 flex flex-col justify-center items-center gap-16 [&>section]:max-w-3xl [&>div]:max-w-3xl [&>section]:w-full [&>div]:w-full">
                <div className="flex w-full">
                    <Link href="/" className="min-[72rem]:hidden flex gap-5 self-start w-full cursor-gauntlet">
                        <img src="/back.svg" className="mt-1" alt="Back" />
                        <span className="text-lg font-pixel text-white transition-colors duration-200">
                            Return
                        </span>
                    </Link>
                </div>

                <section id="overview" className="flex flex-col gap-4">
                    <h1 className="large-title mb-6">Driving efficiency for design and development at Felix with a cross-platform design system</h1>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h2 className="headline-sm mb-1.5">Team</h2>
                            <span className="body-sm">Christina Raganit (Product Design Lead)<br></br>
                                Head of Marketing (Supervisor)<br></br>
                                Frontend Development Lead<br></br>
                                2× Frontend Developers
                            </span>
                        </div>

                        <div>
                            <h2 className="headline-sm mb-1.5">Duration</h2>
                            <span className="body-sm">May-September 2022 (4 months to develop MVP)
                                <br></br>September 2023–April 2024 (maintenance and improvements)
                            </span>
                        </div>
                    </div>

                    <img src="/projects/felix-design-system.png" className="my-2" />

                    <p className="body-lg">I was the first design hire at Felix Payment Systems, where I built a scalable design system that could support desktop, tablet, and mobile products while following the Felix brand identity. This design system now serves as the single source of truth for all product surfaces, streamlining efficiency for both design and development workflows.
                    </p>

                    <div className="w-full flex mt-12 justify-center">
                        <Divider></Divider>
                    </div>

                </section>


                <section id="background">
                    <h2 className="headline-sm mb-3">Background</h2>
                    <p className="body-lg mb-4">Felix Payment Systems is a fintech startup focusing on tech that allows smartphone devices to act as payment terminals without requiring extra hardware.</p>
                    <p className="body-lg mb-6">Their two primary products are Terminal (for payment acceptance) and Portal (for businesses to manage and view records of their transactions).</p>

                    <img src="/placeholder.png"></img>

                    <div className="w-full flex mt-12 justify-center">
                        <Divider></Divider>
                    </div>
                </section>

                <section id="problem">
                    <h2 className="headline-sm mb-3">Problem</h2>
                    <p className="body-xl mb-4">No source of truth for design, creating inconsistencies across Felix products</p>
                    <p className="mb-6">Early, I noticed a lack of clear design guidelines for foundations like spacing, color, and typography. These inconsistencies created noticeable visual misalignment across the different products at Felix.
                    </p>

                    <img src="/placeholder.png" className="mb-12"></img>

                    <p className="mb-6">
                        I spoke with the frontend development leads and encountered two primary issues:
                    </p>
                    <div className="grid grid-cols-2 gap-6 lg:gap-12">
                        <div>
                            <h3 className="title-2 mb-4">Hardcoded values made the codebase challenging to maintain</h3>
                            <p>Typography, color, and spacing were hardcoded across the codebase, making even simple changes require heavy refactoring.
                            </p>
                        </div>

                        <div>
                            <h3 className="title-2 mb-4">Lack of foundational components resulted in more development time and effort</h3>
                            <p>Without a component library, developers often duplicated existing components or spent time identifying reusable ones.
                            </p>
                        </div>
                    </div>
                </section>

                <DesignChallenge question={"How might I improve the design process so that the frontend developers have an easier time translating the mockups delivered by our design team into frontend code?"}></DesignChallenge>

                <section id="what-i-did" className="flex flex-col gap-4">
                    <div className="mb-4">
                        <h2 className="headline-sm mb-3">What I Shipped</h2>
                        <p>I’m unable to share the original component guidelines due to an NDA, but I’ve recreated key pages for reference. For details on the full project, please reach out via email at <a href="mailto:christinaraganit@gmail.com" className="cursor-gauntlet inline">christinaraganit@gmail.com</a></p>
                    </div>
                    <div className="flex flex-col gap-12 [&>div]:flex [&>div]:flex-col [&>div]:gap-4">
                        <div>
                            <h3 className="body-xl -mb-1">Audited existing screens, gathering common styles</h3>
                            <p>I audited existing design elements to catalog components and identify inconsistencies that needed resolution before standardizing styles.</p>
                            <img src="/placeholder.png"></img>
                        </div>

                        <div>
                            <h3 className="body-xl -mb-1">Created tokens for spacing, colors, and typography</h3>
                            <p> This removed the need for developers to hardcode variables, making maintenance easier and speeding up future prototyping in Figma</p>
                            <img src="/placeholder.png"></img>
                        </div>

                        <div>
                            <p className="body-xl text-balance">Wrote detailed documentation for each of the core screens to ensure seamless implementation</p>
                            <img src="/placeholder.png"></img>
                        </div>

                        <div>
                            <p className="body-xl text-balance">Created a component library and documented the attributes and behaviors of 35+ reusable components</p>
                            <img src="/placeholder.png"></img>
                        </div>

                        <div>
                            <p className="body-xl text-balance">Wrote guidelines to writing better UX copy and error messages</p>
                            <img src="/placeholder.png"></img>
                        </div>
                    </div>
                </section>

                <div className="w-full flex justify-center">
                    <Divider></Divider>
                </div>

                <section id="results" className="flex flex-col gap-4">
                    <h2 className="headline-sm -mb-1">Results</h2>
                    <PixelBorderBox className="text-center">
                        <div className="pt-10 pb-8">
                            <p className="body-xl mb-8 text-balance">The design system documentation Christina wrote has been a total game-changer for the team, making UI development smoother and more efficient than before.</p>
                            <p className="title-2 mb-2">Jason Lee</p>
                            <p className="text-sm italic">Frontend Development Lead at Felix</p>
                        </div>
                    </PixelBorderBox>

                    <PixelBorderBox className="text-center">
                        <div className="pt-10 pb-8">
                            <p className="body-xl mb-8 text-balance">I read the guidelines Christina wrote when I was being onboarded and I found them incredibly comprehensive, well-organized, and easy to follow.</p>
                            <p className="title-2 mb-2">Anurag Sharma</p>
                            <p className="text-sm italic">User Interface Designer at Felix</p>
                        </div>
                    </PixelBorderBox>
                </section>

                <div className="w-full flex justify-center">
                    <Divider></Divider>
                </div>


                <section id="design-process" className="flex flex-col">
                    <h2 className="headline-sm mb-3">Design Process</h2>

                    <div className="flex flex-col gap-10 [&>div]:flex [&>div]:flex-col [&>div]:gap-4">
                        <div>
                            <p className="body-xl">Adopting Brad Frost’s atomic design framework
                            </p>
                            <p className="mb-2">Early on, I adopted Brad Frost’s Atomic Design methodology, labeling components as “atoms”, “molecules”, and “organisms”. This was helpful for me learning about how to structure components.
                            </p>
                            <img src="/placeholder.png"></img>
                        </div>

                        <div>
                            <p className="body-xl">"What the hell is a molecule? And why do I care?"
                            </p>
                            <p className="">However, it didn't help developers understand <i>how</i> components were structured. They don’t need to know if a button is an “atom” or a form field is a “molecule”.
                            </p>
                            <p>Rather than forcing the framework, I ended up documenting components in a way that made sense to the team. What made sense to them was an Anatomy of each component.</p>
                            <img src="/placeholder.png"></img>
                        </div>

                        <div>
                            <p className="body-xl">Iterating on spacing tokens to support evolving needs and improve clarity
                            </p>
                            <p className="">As the needs of the company evolved, so did the design system. An iteration I made was on the spacing system.
                            </p>
                            <p>Developers expressed that they found the naming conventions to be unintuitive. They’re unsure, by looking at the variable name, what number it’d correspond to. The current spacing system also didn’t support larger variables to accommodate larger screen sizes.</p>
                            <img src="/placeholder.png"></img>
                        </div>
                    </div>
                </section>

                <div id="reflection" className="flex flex-col justify-center items-center gap-16">
                    <Divider></Divider>
                    <section className="max-w-2xl">
                        <div className="flex flex-col mb-6">
                            <h2 className="headline-sm mb-3">Reflection</h2>
                            <p>If I were given more time to work on the project…
                            </p>
                        </div>
                        <div className="grid gap-6">
                            <div>
                                <p className="body-xl mb-4">
                                    I’d dedicate more effort to accessibility for both design and development.
                                </p>
                                <p className="body mb-4">
                                    For design, I’d create clear guidelines for color contrast, keyboard and focus interactions, and screen reader considerations. For development, I’d host a workshop on accessibility considerations like keyboard navigability, heading levels, and semantic HTML and ARIA roles.
                                </p>
                            </div>
                            <div>
                                <p className="body-xl mb-4">
                                    I’d improve upon the color tokens.
                                </p>
                                <p className="body mb-4">
                                    Currently, the color tokens in the design system are only the primitive values. I’d develop semantic tokens to make it clear how each color should be used across components for improved consistency and maintainability.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <div id="learnings" className="flex flex-col justify-center items-center gap-16 min-h-[50vh]">
                    <Divider></Divider>
                    <section className="max-w-2xl">
                        <div className="flex gap-1.5">
                            <h2 className="headline-sm mb-3">Learnings</h2>
                        </div>
                        <div className="grid gap-6">
                            <div>
                                <p className="body-xl mb-4">
                                    Naming things is hard.
                                </p>
                                <p className="body mb-4">
                                    Choosing clear, consistent names for design system components is surprisingly difficult. Names need to make sense to both designers and developers, convey purpose, and scale as the system grows.
                                </p>
                            </div>
                            <div>
                                <p className="body-xl mb-4">
                                    Accessibility needs early attention.
                                </p>
                                <p className="body mb-4">
                                    Focusing on accessibility early makes sure that every component, from complex forms down to the smallest button, is inclusive by default. This reduces the risk of a retroactive fix down the line which can be time-consuming and costly.
                                </p>
                            </div>
                        </div>
                    </section>

                    <Divider></Divider>
                </div>
            </section>
        </div>
    </main >)
}