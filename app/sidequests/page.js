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
            <Project role={"Frontend Development"} title={"Built an MBTI quiz website for Vancouver’s largest-growing hotpot chain"} year={"2025"}>
                <img src="/projects/big-way-quiz.png"></img>
            </Project>

            <Project role={"UX Design"} title={"Designed a searching and filtering feature for desktop Team Planner of Teamfight Tactics"} year={"2024"}>
                <video muted autoPlay loop>
                    <source src="https://packaged-media.redd.it/pk0kgypryo9c1/pb/m2-res_1080p.mp4?m=DASHPlaylist.mpd&v=1&e=1759060800&s=b5e8341bb031601ea1397aad3fef6782e17950ad"></source>
                </video>
            </Project>

            <Project role={<span>3D Modelling <span className="ampersand">&</span> Interaction Design</span>} title={"3D modelled a vending machine in Unreal Engine for an interaction design course"} year={"2024"}>
                <video muted autoPlay loop>
                    <source src="/projects/reusables-vending-machine.mp4"></source>
                </video>
            </Project>

            <Project role={<span>Visual Design <span className="ampersand-sm">&</span> Prototyping</span>} title={"Won 2nd place at CreateSC 2025 by digitizing the Tiktok viral game Hear Me Out Cake"} year={"2025"}>
                <img src="/projects/hear-me-out-cake.png"></img>
            </Project>

            <Project role={<span>Visual Design <span className="ampersand-sm">&</span> Branding</span>} title={"Crafted a visual design identity for Amsterdam-based Dutch Design Week"} year={"2023"}>
                <img src="/projects/ddw.png"></img>
            </Project>

            <Project role={"UX Design"} title={"Won 1st place at Eunoia UX Hackathon with a rebrand of Proud Zebra’s online storefront "} year={"2023"}>
                <img src="/projects/proud-zebra.png"></img>
            </Project>

            <Project role={<span>UX Design <span className="ampersand-sm">&</span> Frontend Development</span>} title={"Won 1st place at cmd-f with an app that enables victims to discreetly report incidents of domestic violence"} year={"2023"}>
                <img src="/projects/chow-now.png"></img>
            </Project>
        </section>
    </main>);
}