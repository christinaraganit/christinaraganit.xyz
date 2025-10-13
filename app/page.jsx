"use client";

import "./globals.css";
import Project from "../components/Project";

import { motion } from "framer-motion";

export default function Home() {
  return (<main className="flex flex-col items-center m-8">
    <section className="max-w-3xl flex flex-col items-center pt-16 pb-28">
      <h1 className="large-title font-pixel text-center text-balance mb-5">Christina is a product designer who
        <i> writes code & thinks in systems.</i></h1>

      <p className="body-lg text-center max-w-2xl text-balance">Open to product design <span className="ampersand">&</span> design engineering internships for Summer 2026!</p>
    </section>

    <section id="projects" className="max-w-[100rem] grid xl:grid-cols-2 gap-y-8 gap-x-8">
      {/* <Project role={"Product Design"} title={"Extending ChatGPT's memory into the real world with Tomo, a new consumer AI hardware device"} year={"2025"}>
        <video autoPlay loop muted className="h-full w-auto">
          <source src="/projects/gradient.mp4" className="h-full w-auto"></source>
        </video>
      </Project> */}

      <Project role={"Product Design"} passwordProtected={true} title={"Empowering internal teams at Asana to drive user adoption with Custom Onboarding"} year={"Shipping 2026"} link="/projects/custom-onboarding-in-otto">
        <motion.img src="/projects/asana-logo.png" layoutId="otto-hero" className="cursor-lock" id="otto-hero" draggable={false} />
      </Project>

      <Project role={"Product Design"} title={"Designed & shipped improvements to Curated Work in Asana’s Team page"} year={"Shipped 2025"} link={"/projects/asana-team-page"}>
        <video src="/projects/curated-work.mp4" loop muted autoPlay />
      </Project>

      {/* <Project role={"Product Design"} title={"Shipped a 3× faster check-in system for SFU’s largest hackathon"} year={"2025"}>
        <img src="/placeholder.png" />
      </Project> */}

      <Project role={"Design Systems"} title={"Driving efficiency for design & development at Felix with a cross-platform design system"} year={"Shipped 2022"} link={"/projects/felix-design-system"}>
        <img src="/projects/felix-design-system.png" draggable={false} />
      </Project>

      <Project role={"Product Design"} title={"Improving mentorship for participants at Simon Fraser University's largest in-person hackathon"} year={"2024"}>
        <img src="/projects/hackerhelper-thumbnail.png" draggable={false} />
      </Project>

      <Project role={<span>Visual Design <span className="ampersand-sm">&</span> Branding</span>} title={"Built a design direction and prototyped a pre-event microsite for Amsterdam-based Dutch Design Week"} year={"2023"}>
        <img src="/projects/ddw-thumbnail.png" draggable={false} />
      </Project>

    </section>
  </main>)
}