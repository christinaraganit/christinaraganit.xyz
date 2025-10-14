"use client";

import Project from "../../components/Project";
import Navigation from "../../components/Navigation";
import { AnimatePresence, motion } from "framer-motion";
import { tr } from "framer-motion/client";

export default function Sidequests() {
    return (<main className="flex flex-col items-center m-8">
        <section className="max-w-3xl flex flex-col items-center pt-16 pb-28">
            <h1 className="large-title font-pixel text-center text-balance">Christina <i>adores</i> embarking on random sidequests. So far, she's...</h1>
        </section>


        <section id="projects" className="max-w-[100rem] grid xl:grid-cols-2 gap-y-8 gap-x-8">
            <Project role={"Frontend Development"} title={"Built an MBTI quiz website for Vancouver’s largest-growing hotpot chain, garnering 14k visitors at launch"} year={"2025"}>
                <img src="/projects/big-way-quiz.png"></img>
            </Project>

            <Project role={"UX Design"} title={"Designed a searching and filtering feature for desktop Team Planner of Teamfight Tactics"} year={"2024"}>
                <video playsInline muted autoPlay loop>
                    <source src="/projects/tft-team-planner.mp4"></source>
                </video>
            </Project>

            <Project role={<span>3D Modelling <span className="ampersand">&</span> Interaction Design</span>} title={"3D modelled a vending machine in Unreal Engine for an interaction design course"} year={"2024"}>
                <video playsInline muted autoPlay loop>
                    <source src="/projects/reusables-vending-machine.mp4"></source>
                </video>
            </Project>

            <Project role={<span>Visual Design <span className="ampersand-sm">&</span> Prototyping</span>} title={"Won 2nd place at CreateSC 2025 by digitizing the Tiktok viral game Hear Me Out Cake"} year={"2025"}>
                <img src="/projects/hear-me-out-cake.webp"></img>
            </Project>

            <Project role={"UX Design"} title={"Won 1st place at Eunoia UX Hackathon with a rebrand of Proud Zebra’s online storefront "} year={"2023"}>
                <img src="/projects/proud-zebra.png"></img>
            </Project>

            <Project role={<span>UX Design <span className="ampersand-sm">&</span> Frontend Development</span>} title={"Won 1st place at cmd-f with an app that enables victims to discreetly report incidents of domestic violence"} year={"2023"}>
                <img src="/projects/chow-now.webp"></img>
            </Project>

            {/* <Project role={<span>Visual Design <span className="ampersand-sm">&</span> UX Design</span>} title={"Designed an accessible online shopping experience for first-time cannabis consumers"} year={"2023"}>
                <img src="/projects/cheekys.png" draggable={false} />
            </Project> */}
        </section>
    </main>);
}