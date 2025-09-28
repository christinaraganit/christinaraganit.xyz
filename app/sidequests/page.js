"use client";

import Project from "../components/Project";
import Navigation from "../components/Navigation";
import { AnimatePresence, motion } from "framer-motion";
import { tr } from "framer-motion/client";

export default function Lore() {
    return (<main className="col-span-5 md:mx-8 lg:mx-12">
        <section className="mt-12 mb-24 flex flex-col gap-5 items-center">
            <h1 className="large-title font-pixel text-center text-balance">Christina <i>adores</i> embarking on random sidequests. So far, she's...</h1>
        </section>

        <section id="projects" className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <Project role={"Frontend Development"} title={"Built an MBTI quiz website for Vancouver’s largest-growing hotpot chain"} year={"2025"}>
                <img src="/projects/big-way-quiz.png"></img>
            </Project>

            <Project role={<span>3D Modelling <span className="ampersand">&</span> Interaction Design</span>} title={"3D modelled a vending machine in Unreal Engine for an interaction design course"} year={"2024"}>
                <video muted autoPlay loop>
                    <source src="/projects/reusables-vending-machine.mp4"></source>
                </video>
            </Project>

            <Project role={"UX Design"} title={"Designed searching and filtering feature for desktop Team Planner of Teamfight Tactics"} year={"2024"} prominent={true}>
                <video muted autoPlay loop>
                    <source src="https://packaged-media.redd.it/pk0kgypryo9c1/pb/m2-res_1080p.mp4?m=DASHPlaylist.mpd&v=1&e=1759060800&s=b5e8341bb031601ea1397aad3fef6782e17950ad"></source>
                </video>
            </Project>

            <Project role={"Interface Design"} title={"Designed native information support for Teamfight Tactics mobile"} year={"2024"} prominent={true}>
                <video muted autoPlay loop>
                    <source src="/projects/study-hall.mp4"></source>
                </video>
            </Project>

            <Project role={<span>Visual Design <span className="ampersand-sm">&</span> Prototyping</span>} title={"Won 2nd place at CreateSC 2025 by digitizing the Tiktok viral game Hear Me Out Cake"} year={"2025"}>
                <img src="/placeholder.png"></img>
            </Project>

            <Project role={<span>UX Design <span className="ampersand-sm">&</span> Frontend Development</span>} title={"Won 2nd place at StormHacks 2023 with a Chrome extension that detects scams"} year={"2023"}>
                <img src="/placeholder.png"></img>
            </Project>

            <Project role={"UX Design"} title={"Won 1st place at Eunoia UX Hackathon with a rebrand of Proud Zebra’s online storefront "} year={"2023"}>
                <img src="/placeholder.png"></img>
            </Project>

            <Project role={<span>UX Design <span className="ampersand-sm">&</span> Frontend Development</span>} title={"Won 1st place at cmd-f with an app that enables victims to discreetly report incidents of domestic violence"} year={"2023"}>
                <img src="/placeholder.png"></img>
            </Project>
        </section>
    </main>);
}