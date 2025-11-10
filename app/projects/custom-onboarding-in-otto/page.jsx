import DesignChallenge from "../../../components/blocks/DesignChallenge";
import Divider from "../../../components/blocks/Divider";
import VerticalNav from "../../../components/Navigation";
import Link from "next/link";
import { isAuthenticated } from "../../../lib/auth";
import PasswordDialog from "../../../components/PasswordDialog";

export const runtime = 'edge';

export default async function CustomOnboardingInOtto() {
    const hasPassword = await isAuthenticated();
    if (!hasPassword) {
        return (
            <main className="lg:h-[calc(100dvh-11rem)] w-full h-full max-h-dvh max-w-dvw flex flex-col justify-center">
                <section id="case-study" className="m-8 my-12 flex flex-col h-full items-center gap-16 [&>section]:max-w-3xl [&>div]:max-w-3xl">
                    <div className="flex w-full">
                        <Link href="/" className={`flex gap-5 self-start w-full cursor-gauntlet ${isAuthenticated ? "" : "hidden"}`}>
                            <img src="/back.svg" className="mt-1" alt="Back" />
                            <span className="text-sm font-pixel text-white transition-colors duration-200">
                                Return
                            </span>
                        </Link>
                    </div>
                    <div className="h-full w-full flex-1 items-center justify-center flex">
                        <PasswordDialog url="/projects/custom-onboarding-in-otto" title="This case study is in progres." paragraph="I've signed an NDA, so I can't share this work publicly. Please enter the correct password to proceed." />
                    </div>
                </section>

            </main>
        );
    }
    return (
        <main className="w-full max-w-dvw flex flex-col justify-center">
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
                        <h1 className="large-title mb-6">Empowering internal teams at Asana to drive user adoption with Custom Onboarding</h1>
                        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-4">
                            <div className="md:col-span-2">
                                <h2 className="headline-sm mb-1.5">Team</h2>
                                <span className="body-sm">Christina Raganit (Lead Designer)<br></br>
                                    Chuiee Yang (Design Mentor)<br></br>
                                </span>
                            </div>
                            <div>
                                <h2 className="headline-sm mb-1.5">Status</h2>
                                <span className="body-sm">Handed off<br></br>
                                    In development
                                </span>
                            </div>
                            <div>
                                <h2 className="headline-sm mb-1.5">Duration</h2>
                                <span className="body-sm">June–July 2025<br></br>(6 Weeks)
                                </span>
                            </div>
                        </div>
                        <img src="/projects/custom-onboarding-in-otto.png" id="otto-hero" className="my-4" />

                        <p className="body-lg">As a product design intern at Asana, I led the design direction for a feature within an internal tool, enabling our Customer Success team to create customized onboarding flows for the organizations they work with, making it easier for new users to adopt Asana and start using the platform effectively.
                        </p>


                        <div className="w-full flex mt-12 justify-center">
                            <Divider></Divider>
                        </div>

                    </section>


                    <section id="background">
                        <h2 className="headline-sm mb-3">Background</h2>
                        <p className="body-xl mb-6">The ideal onboarding experience to Asana looks different for every team. When organizations rely on a single generic flow, employees fail to see Asana’s value, and adoption suffers.</p>
                        <img src="/projects/otto/context.png"></img>
                    </section>

                    <section>
                        <div className="grid gap-6 lg:grid-cols-2 items-center">
                            <p className="body-xl">Asana already enables Admins to create Custom Onboarding; however, their heavy workloads often keep them from setting these flows up.</p>
                            <img src="/projects/otto/admin-problem.png"></img>
                        </div>
                    </section>

                    <div className="grid gap-6 lg:grid-cols-2 items-center">
                        <p className="body-xl">Customer Success Managers (CSMs) can’t create these flows themselves, since they need to be an Admin at that organization.</p>
                        <img src="/projects/otto/csm-no-access.png"></img>
                    </div>

                    <DesignChallenge question={"How might we enable CSMs to create Custom Onboarding flows on behalf of a company, while protecting said company’s sensitive data?"}></DesignChallenge>

                    <section id="whats-otto">
                        <h2 className="headline-sm mb-3">What's OTTO?</h2>
                        <p className="body-xl text-balance mb-4">
                            CSMs live in this internal tool called OTTO.
                        </p>
                        <p className="body mb-4">
                            Currently, they can only view existing Custom Onboarding flows. They can’t create one.
                        </p>
                        <p className="body mb-6">That’s where I intervened, navigating the technical challenges of OTTO and the complex configurations of Custom Onboarding to deliver a solution that meets CSMs’ needs.</p>
                        <img src="/projects/otto/otto.png"></img>
                    </section>


                    <div id="constraints" className="flex flex-col justify-center items-center gap-16">
                        <Divider></Divider>

                        <section id="constraints" className="max-w-xl">
                            <h2 className="headline-sm mb-3">Constraints</h2>
                            <div className="grid gap-8">
                                <div>
                                    <p className="body-xl mb-4">
                                        OTTO has a very limited component set.
                                    </p>
                                    <p className="body mb-4">
                                        I couldn’t use components and patterns that were available in the Admin Console, since the two codebases are not shared.
                                    </p>
                                </div>
                                <div>
                                    <p className="body-xl mb-4">
                                        In OTTO, sensitive company information must be redacted.
                                    </p>
                                    <p className="body mb-4">
                                        This protects company information that's under NDA, but can get in the way of our internal CSMs creating Custom Onboarding flows.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <Divider></Divider>
                    </div>



                    <section id="solution" className="flex flex-col items-center">
                        <div className="flex flex-col gap-4">
                            <h2 className="headline-sm">Solution</h2>
                            <p className="body-xl">
                                Handed off a feature that met CSMs' needs by navigating complex onboarding logic, technical limitations, and sensitive data constraints
                            </p>
                            <p className="body mb-6">
                                Through OTTO, CSMs wouldn’t need to be Admins at the organizations they work with, since the internal tool already obfuscates sensitive data.
                            </p>
                        </div>
                        <video playsInline autoPlay loop muted controls>
                            <source src="/projects/otto/flow.mp4"></source>
                        </video>
                    </section>

                    <Divider></Divider>

                    <div id="design-decisions" className="flex flex-col justify-center items-center gap-16">
                        <section>
                            <div className="flex flex-row items-center gap-1.5 mb-4">
                                <h2 className="headline-sm">Design Decision</h2>
                                <img src="/1-circled.svg"></img>
                            </div>
                            <p className="body-2xl mb-4">
                                How do I design for clarity when key information is redacted?
                            </p>
                            <p className="body mb-6">
                                For example, how do you know what flow you’re editing if you can’t see its name?
                            </p>
                            <img src="/projects/otto/edit-flow-otto.png">
                            </img>
                        </section>

                        <Divider></Divider>

                        <section>
                            <div className="flex flex-row items-center gap-1.5 mb-4">
                                <h2 className="headline-sm">Design Decision</h2>
                                <img src="/2-circled.svg"></img>
                            </div>
                            <p className="body-2xl mb-6">
                                How do I show the right amount of detail at the right time?
                            </p>
                            <img src="/projects/otto/summary-pane-feedback.png">
                            </img>
                        </section>

                        <section>
                            <p className="body-xl text-balance mb-6">
                                I landed on a dynamic summary where dropdown groups begin collapsed, and only expand when the CSM interacts with its associated step.
                            </p>
                            <video playsInline autoPlay loop muted controls>
                                <source src="/projects/otto/interaction-behavior.mp4"></source>
                            </video>
                        </section>


                        <Divider></Divider>

                        <section>
                            <div className="flex flex-row items-center gap-1.5 mb-4">
                                <h2 className="headline-sm">Design Decision</h2>
                                <img src="/3-circled.svg"></img>
                            </div>
                            <p className="body mb-1">
                                Given the limited component set in OTTO...</p>
                            <p className="body-2xl mb-4">What’s the best existing form factor for creating a Custom Onboarding flow?
                            </p>
                            <p className="body mb-6">
                                I narrowed it down to two options — a modal with a side stepper and a modal with a persistent summary.
                            </p>
                            <img src="/projects/otto/form-factor.png">
                            </img>
                        </section>

                        <section>
                            <p className="body mb-6">
                                I chose the persistent summary because certain configurations in Custom Onboarding depend on one another. The persistent summary will help CSMs create flows more efficiently with the context it provides from previous steps.
                            </p>
                            <img src="/projects/otto/creation-exp-side-stepper.png">
                            </img>
                        </section>
                        <Divider></Divider>

                        <section className="max-w-3xl">
                            <div className="flex flex-row items-center gap-1.5 mb-4">
                                <h2 className="headline-sm">Design Decision</h2>
                                <img src="/4-circled.svg"></img>
                            </div>
                            <p className="body-2xl mb-4">
                                When should I push back against technical limitations?
                            </p>
                            <p className="body mb-4">
                                I proposed new functionality in OTTO when I recognized that they contributed to my goal of creating a welcoming first experience for new users of Asana and helping them recognize how the platform can meet their unique needs.
                            </p>
                            <p className="body mb-6">The functionality was for custom logo upload and a HEX code input for setting and previewing a background color in the welcome message.</p>
                            <video playsInline autoPlay loop controls muted>
                                <source src="/projects/otto/trimmed-color.mp4"></source>
                            </video>
                        </section>
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
                                        Thinking critically about deeply interconnected systems
                                    </p>
                                    <p className="body mb-4">
                                        I had to understand the dependencies between different configurations of a Custom Onboarding flow, as well as the technical limitations of OTTO, to be able to design the optimal experience for a CSM given these constraints.
                                    </p>
                                </div>
                                <div>
                                    <p className="body-xl mb-4">
                                        Balancing engineering cost with user needs
                                    </p>
                                    <p className="body mb-4">
                                        I recognized that this project was not about improving the existing experience of OTTO. CSMs would rather have this feature sooner as it would allow them to deliver the ideal onboarding experiences for new users of Asana, driving adoption.
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