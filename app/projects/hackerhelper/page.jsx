"use client"

import Divider from "../../../components/blocks/Divider";
import VerticalNav from "../../../components/Navigation";
import Link from "next/link";
import PixelBorderBox from "../../../components/PixelBorderBox";
import DesignChallenge from "../../../components/blocks/DesignChallenge";
import MediaTag from "../../../components/MediaTag";
import Tag from "../../../components/Tag";

export default function HackerHelper() {
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
                    <h1 className="large-title mb-6">Improving mentorship for participants at in-person hackathons with HackerHelper</h1>
                    <p className="body-lg">During this month-long class project, I led the interface and interaction design for a help request ticketing system that facilitates communication between participants and mentors at in-person hackathons. I worked alongside two teammates — a UX researcher and a UX writer.

                    </p>

                    <img src="/projects/hackerhelper-thumbnail.png" className="my-4" draggable={false} />


                    <div className="grid gap-8 md:grid-cols-4">
                        <div className="md:col-span-2">
                            <h2 className="headline-sm mb-1.5">Team</h2>
                            <span className="body-sm">Christina Raganit (Product Designer)<br></br>
                                Celine August Santoso (UX Researcher)<br></br>
                                Gurnisha Rehal (UX Writer)
                            </span>
                        </div>

                        <div>
                            <h2 className="headline-sm mb-1.5">My Roles</h2>
                            <span className="body-sm text-balance">Product Design, User Interface Design, Prototyping
                            </span>
                        </div>

                        <div>
                            <h2 className="headline-sm mb-1.5">Duration</h2>
                            <span className="body-sm">July 2024 (1 month)
                            </span>
                        </div>
                    </div>

                    <div className="w-full flex mt-12 justify-center">
                        <Divider></Divider>
                    </div>

                </section>


                <section id="background">
                    <h2 className="headline-sm mb-3">Background</h2>
                    <p className="body-xl mb-4">A hackathon is an event where students create tech projects to solve challenges within a set time, like 24–72 hours.
                    </p>
                    <p className="mb-6">I love doing hackathons, so I sought to enhance the hackathon experience by first understanding the goals, behaviors, and needs of the kinds of people who are involved in these events.</p>
                    <img src="/projects/hackerhelper/me-at-hackathons.webp" className="mb-16"></img>


                    <h2 className="headline-sm mb-5">Who's who at a hackathon?</h2>

                    <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                        <div>
                            <p className="title-1 mb-3">Hackers</p>
                            <p className="">Event participants who collaborate in teams with other hackers to develop projects</p>
                        </div>

                        <div>
                            <p className="title-1 mb-3">Mentors</p>
                            <p className="body-lg">Experienced professionals or upper-year students who provide guidance to hackers</p>
                        </div>

                        <div>
                            <p className="title-1 mb-3">Organizers</p>
                            <p className="body-lg">Students responsible for planning and managing the hackathon</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-4 mt-16 lg:gap-12 items-center">
                        <div>
                            <p className="title-1 mb-6">Scaling up Simon Fraser University's largest hackathon</p>
                            <p className="body-lg">For this project, our team partnered with SFU Surge. Their primary goal is to scale up StormHacks, their flagship hackathon, without a significant decline in hacker experience.</p>
                        </div>

                        <div>
                            <img src="/projects/hackerhelper/sfu-surge.png" className="mb-4"></img>
                            <MediaTag type="IMAGE" caption={"The organizing team at StormHacks 2024. Christina is at the very top right!"}></MediaTag>
                        </div>
                    </div>
                </section>

                <div className="w-full flex justify-center">
                    <Divider></Divider>
                </div>

                <section id="problem" className="min-h-[50dvh] flex flex-col justify-center">


                    <h2 className="headline-sm mb-3">Problem</h2>
                    <p className="body-2xl mb-4">The current system for requesting mentor help is error-prone, often resulting in unanswered requests.</p>
                    <p className="text-lg mb-8">SFU Surge uses Discord for all of its hackathon communications and announcements. To ask a mentor for help, hackers need to send a message in a public Discord channel filled with a lot of messages.</p>

                    <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                        <div>
                            <h3 className="headline mb-3">Pain Point #1</h3>
                            <p className="body-lg">At large hackathons, help requests get accidentally missed due to the large volume of them.</p>
                        </div>
                        <div>
                            <h3 className="headline mb-3">Pain Point #2</h3>
                            <p className="body-lg">Hackers don’t always know how to describe the problem they’re facing.</p>
                        </div>
                        <div>
                            <h3 className="headline mb-3">Pain Point #3</h3>
                            <p>When a mentor can’t handle a request, trying to find someone who can, just clutters the chat more.
                            </p>
                        </div>
                    </div>
                </section>

                <DesignChallenge question={"How might we effectively connect hackers with mentors and ensure hackers receive the support they need in a timely manner?"}></DesignChallenge>


                <section id="solution" className="flex flex-col gap-16">
                    <div>
                        <h2 className="headline-sm mb-3">Solution</h2>
                        <p className="body-2xl mb-4">HackerHelper connects hackers with mentors, helping them get the support they need faster.</p>
                        <p>This web application is designed to be responsive on both desktop and mobile, allowing hackers to submit help requests from their laptops while mentors can view new requests on their mobile devices as they assist hackers around the venue.</p>
                    </div>

                    <div>
                        <Tag text={"STEP 1"} className="w-fit mb-3"></Tag>
                        <p className="body-2xl mb-4">Hiccup the Hacker gets stuck on a CSS problem and requires mentor assistance.</p>
                        <p className="mb-8">From our mentor interviews, we learned that hackers often struggle to explain their issues clearly, making it hard for mentors to help efficiently. Guided prompts ensure Hiccup collects the right details for mentors to solve problems faster.</p>

                        <div>
                            <video playsInline autoPlay loop muted controls>
                                <source src="/projects/hackerhelper/step-1.mp4"></source>
                            </video>
                        </div>
                    </div>

                    <div>
                        <Tag text={"STEP 2"} className="w-fit mb-3"></Tag>
                        <p className="body-2xl mb-8">Marley the Mentor has some experience with CSS, so HackerHelper recommends Hiccup's request to Marley.</p>
                        <div className="bg-[#5A4FE6] flex items-center justify-center">
                            <video playsInline autoPlay loop muted controls className="w-1/3">
                                <source src="/projects/hackerhelper/step-2.mp4"></source>
                            </video>
                        </div>
                    </div>

                    <div>
                        <Tag text={"STEP 3"} className="w-fit mb-3"></Tag>
                        <p className="body-2xl mb-8">Marley accepts the request, informs Hiccup that they are on their way, and heads for Hiccup’s location.</p>
                        <div className="bg-[#5A4FE6] flex items-center justify-center">
                            <video autoPlay loop muted controls className="w-1/3">
                                <source src="/projects/hackerhelper/step-3.mp4"></source>
                            </video>
                        </div>
                    </div>

                    <div>
                        <Tag text={"STEP 4"} className="w-fit mb-3"></Tag>
                        <p className="body-2xl mb-4">Unfortunately, Marley can’t solve the issue, but Sunny might be able to help!</p>
                        <p className="body-lg mb-8">Marley refers Hiccup’s request to a new mentor.</p>
                        <div className="bg-[#5A4FE6] flex items-center justify-center">
                            <video playsInline autoPlay loop muted controls className="w-1/3">
                                <source src="/projects/hackerhelper/step-4.mp4"></source>
                            </video>
                        </div>
                    </div>

                    <div>
                        <Tag text={"STEP 5"} className="w-fit mb-3"></Tag>
                        <p className="body-2xl mb-8">Hiccup marks the request as complete and sees a dialog request for feedback.</p>
                        <video playsInline autoPlay loop muted controls>
                            <source src="/projects/hackerhelper/step-5.mp4"></source>
                        </video>
                    </div>

                    <div>
                        <Tag text={"STEP 6"} className="w-fit mb-3"></Tag>
                        <p className="body-2xl mb-8">Hiccup also decides to give feedback to Marley so he can improve.</p>
                        <video playsInline autoPlay loop muted controls>
                            <source src="/projects/hackerhelper/step-6.mp4"></source>
                        </video>
                    </div>
                </section>


                <div className="w-full flex justify-center">
                    <Divider></Divider>
                </div>

                <div id="results" className="flex flex-col justify-center items-center gap-16">
                    <div>
                        <h2 className="headline-sm mb-3">Results</h2>
                        <p className="body-xl mb-6">HackerHelper received a very positive reception from hacker and mentor testers.</p>
                        <PixelBorderBox className="text-center">
                            <div className="pt-10 pb-8">
                                <p className="body-xl mb-8 text-balance">I think HackerHelper would be really useful. It makes it much easier for hackers to connect with mentors, and for mentors to communicate with each other. I would love to see this implemented for future hackathons.</p>
                                <p className="title-2 mb-2">Anonymous Mentor</p>
                                <p className="text-sm italic">User Tester</p>
                            </div>
                        </PixelBorderBox>
                    </div>

                    <div>
                        <p className="body-xl mb-6">HackerHelper aligns with the goals of SFU Surge, enabling them to scale their events.</p>
                        <PixelBorderBox className="text-center">
                            <div className="pt-10 pb-8">
                                <p className="body-xl mb-8 text-balance">As our hackathons at SFU Surge scale in size, I want to make sure that our hackers have the tools they need to thrive. HackerHelper is exactly what we need.</p>
                                <p className="title-2 mb-2">Matthew Wong</p>
                                <p className="text-sm italic">President of SFU Surge</p>
                            </div>
                        </PixelBorderBox>
                    </div>
                </div>


                <div id="learnings" className="flex flex-col justify-center items-center gap-16">
                    <Divider></Divider>
                    <section className="max-w-2xl">
                        <div className="flex gap-1.5">
                            <h2 className="headline-sm mb-3">Learnings</h2>
                        </div>
                        <div className="grid gap-6">
                            <div>
                                <p className="body-xl mb-4">
                                    Figma has significant limitations in prototyping.
                                </p>
                                <p className="body mb-4">
                                    For example, it doesn’t support user input, making it difficult to test interactions like adding skills during mentor signup. I’d like to explore prototyping tools that handle these interactions better.
                                </p>
                            </div>
                            <div>
                                <p className="body-xl mb-4">
                                    A development background makes a huge difference when designing interactions!
                                </p>
                                <p className="body">
                                    For example, when a teammate suggested comma-separated input when adding skills, I proposed a less error-prone method based on past development experience. Testers found it easier to use, and I was glad to see the interaction was technically feasible.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="w-full flex justify-center">
                        <Divider></Divider>
                    </div>
                </div>
            </section>
        </div>
    </main >)
}