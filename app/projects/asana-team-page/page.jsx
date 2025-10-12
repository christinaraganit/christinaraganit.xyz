"use client"

import Divider from "../../../components/blocks/Divider";
import VerticalNav from "../../../components/Navigation";
import Link from "next/link";
import PixelBorderBox from "../../../components/PixelBorderBox";

export default function TeamPage() {
    return (<main className="w-full max-w-dvw flex flex-col justify-center">
        <div>
            <aside id="case-study-navigation" className="fixed left-[5%]">
                <VerticalNav />
            </aside>
            <section id="case-study" className="m-8 my-12 flex flex-col justify-center items-center gap-16 [&>section]:max-w-3xl [&>div]:max-w-3xl">
                <div className="flex w-full">
                    <Link href="/" className="min-[72rem]:hidden flex gap-5 self-start w-full cursor-gauntlet">
                        <img src="/back.svg" className="mt-1" alt="Back" />
                        <span className="text-lg font-pixel text-white transition-colors duration-200">
                            Return
                        </span>
                    </Link>
                </div>

                <section id="overview" className="flex flex-col gap-4">
                    <h1 className="large-title mb-6">Designed <i>&</i> shipped improvements to Curated Work in Asana’s Team page</h1>
                    <p className="body-lg">As a product design intern at Asana, I audited the experience of creating and managing Curated Work items in the Team page. I identified inconsistencies and areas of non-compliance with the design system, documented the necessary improvements, and collaborated with developers to implement and ship these changes.
                    </p>

                    <video src="/projects/curated-work.mp4" loop muted autoPlay className="my-4" />


                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h2 className="headline-sm mb-1.5">Team</h2>
                            <span className="body-sm">Christina Raganit (Product Design Intern)<br></br>
                                Chuiee Yang (Design Mentor)<br></br>
                                Jen Taruno (Product Engineer Intern)<br></br>
                                Caitlin Kinney (Product Engineer Mentor)
                            </span>
                        </div>

                        <div>
                            <h2 className="headline-sm mb-1.5">Duration</h2>
                            <span className="body-sm">May–June 2025 (3 weeks, design)
                                <br></br>July–August 2025 (3 weeks, development)
                            </span>
                        </div>
                    </div>

                    <div className="w-full flex mt-12 justify-center">
                        <Divider></Divider>
                    </div>

                </section>


                <section id="background">
                    <h2 className="headline-sm mb-3">Background</h2>
                    <p className="body-xl mb-6">The Curated Work section in the Team page contains key resources such as the team’s active projects along with relevant links and attachments.
                    </p>
                    <img src="/projects/curated-work/curated-work.png"></img>

                    <div className="w-full flex mt-12 justify-center">
                        <Divider></Divider>
                    </div>
                </section>

                <section id="problem">
                    <h2 className="headline-sm mb-3">Problem</h2>
                    <p className="body-xl mb-4">Users found the process of managing Curated Work items to be inefficient and inconsistent. </p>
                    <p className="mb-6">This deters them from regularly updating this section, which is important as it gives external collaborators visibility into the team’s ongoing projects and overall improves internal communication.
                    </p>

                    <img src="/projects/curated-work/problem.png"></img>

                </section>

                <div className="w-full flex justify-center">
                    <Divider></Divider>
                </div>

                <section id="what-i-shipped" className="flex flex-col gap-4">
                    <h2 className="headline-sm -mb-1">What I Shipped</h2>

                    <div className="flex flex-col gap-10 [&>div]:flex [&>div]:flex-col [&>div]:gap-4">
                        <div>
                            <p className="body-xl">Added a modal enabling users to edit the name or description of a Curated Work item</p>
                            <img src="/projects/curated-work/edit-modal.png"></img>
                        </div>

                        <div>
                            <p className="body-xl">Added custom name and description support for attachments</p>
                            <img src="/placeholder.png"></img>
                        </div>

                        <div>
                            <p className="body-xl">Improved the efficiency of adding Curated Work items</p>
                            <img src="/placeholder.png"></img>
                        </div>

                        <div>
                            <p className="body-xl">Improved compliance with the design system and accessibility guidelines</p>
                            <img src="/placeholder.png"></img>
                        </div>
                    </div>
                </section>

                <div className="w-full flex justify-center">
                    <Divider></Divider>
                </div>

                <section id="design-process" className="flex flex-col gap-4">
                    <h2 className="headline-sm mb-3">Design Process</h2>

                    <div className="flex flex-col gap-10 [&>div]:flex [&>div]:flex-col [&>div]:gap-4">
                        <div>
                            <p className="body-2xl">Designing for consistency doesn't always deliver the best experience</p>
                            <p>When designing new flows, like editing Curated Work items, I made sure to consider existing patterns for editing in the product. However, I learned that designing for consistency didn’t always deliver the best user experience.</p>
                            <p className="mb-2">I initially landed on this way to edit existing items by selecting on the editable field itself, which was consistent with how you’d edit the name of a task in Asana. But this proved to be problematic when attempting to edit something that hasn’t been initially added, like a custom description for that item.</p>

                            <img src="/placeholder.png"></img>
                        </div>

                        <div>
                            <p className="body-2xl">Auditing the Team Page for design system compliance</p>
                            <p className="mb-2">As I reviewed the design system guidelines, I noticed parts of the existing flow that didn’t fully align with them. I logged these issues and documented the necessary improvements.
                            </p>
                            <img src="/placeholder.png"></img>
                        </div>
                    </div>
                </section>

                <div className="w-full flex justify-center">
                    <Divider></Divider>
                </div>


                <section id="constraints" className="flex flex-col gap-4">
                    <h2 className="headline-sm mb-3">Navigating Constraints</h2>

                    <div className="flex flex-col gap-10 [&>div]:flex [&>div]:flex-col [&>div]:gap-4">
                        <div>
                            <p className="body-2xl">Making practical decisions under technical constraints</p>
                            <p className="mb-2">I learned from the engineering team that the original Curated Work item couldn’t be edited after being added. While this wasn’t ideal, enabling edits would require significant development effort for a minor quality-of-life improvement. Since users could still delete and re-add items, I decided the tradeoff didn’t justify the cost.
                            </p>
                            <img src="/placeholder.png" className="mb-4"></img>
                            <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
                                <p>I then focused on fields that could be edited with minimal effort, such as the name and description. These details are important because they provide context—helping users quickly understand what each resource is and why it matters.
                                </p>
                                <img src="/placeholder.png"></img>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="w-full flex justify-center">
                    <Divider></Divider>
                </div>

                <section id="accessibility-specs" className="flex flex-col gap-4">
                    <h2 className="headline-sm mb-3">Accessibility Specs</h2>

                    <div className="flex flex-col gap-10 [&>div]:flex [&>div]:flex-col [&>div]:gap-4">
                        <div>
                            <p className="body-xl">I detailed accessibility documentation to help developers implement inclusive design practices.
                            </p>
                            <p className="mb-2">To make sure users navigating by keyboard could move through elements logically… I mapped out the intended focus sequence, defined clear heading hierarchies, and ensured that all interactive elements had clear and descriptive labels.</p>

                            <img src="/placeholder.png"></img>
                        </div>
                    </div>
                </section>

                <div id="learnings" className="flex flex-col justify-center items-center gap-16">
                    <Divider></Divider>
                    <section className="max-w-2xl">
                        <div className="flex gap-1.5">
                            <h2 className="headline-sm mb-3">Learnings</h2>
                        </div>
                        <div className="grid gap-6">
                            <div>
                                <p className="body-xl mb-4">
                                    Don’t be afraid to ask why.
                                </p>
                                <p className="body mb-4">
                                    I found it useful to understand the decisions behind existing design choices in the Team page to help preserve what works well and make sure that the new changes align with technical limitations (of which there were many) and user needs.
                                </p>
                            </div>
                            <div>
                                <p className="body-xl mb-4">
                                    Document decisions and knowledge.
                                </p>
                                <p className="body mb-4">
                                    During this project, I had to consult so many different teams (design systems, accessibility, engineers). Keeping track of why I made certain choices based on the knowledge I gathered helped me explain my thinking, especially during crit.
                                </p>
                            </div>
                        </div>
                    </section>

                    <Divider></Divider>
                </div>
            </section>
        </div>
    </main>)
}