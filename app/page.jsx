"use client";

import "./globals.css";
import Project from "../components/Project";
import { motion } from "framer-motion";

export default function Home() {
  return (<main className="flex flex-col items-center m-8">
    <section className="max-w-3xl flex flex-col items-center pt-16 pb-28">
      <h1 className="large-title font-pixel text-center text-balance mb-5">Christina is a product designer who
        <i> writes code & thinks in systems.</i></h1>

      <p className="body-lg text-center max-w-2xl text-balance">Previously designed at Asana and SAP. Open to product design <span className="ampersand">&</span> design engineering internships for Summer 2026!</p>
    </section>

    <section id="projects" className="max-w-[100rem] grid md:grid-cols-2 gap-y-8 gap-x-8">
      <Project role={"In Progress"} title={"Designing the future of human-AI collaboration in design workflows with Wonder"} year={"2025"} link={"/projects/wonder"}>
        <video src="/projects/vibrant-wonder-thumbnail.mp4" loop muted autoPlay />
      </Project>

      {/* <Project role={"Product Design"} title={"Making ChatGPT truly personal with an AI-powered wearable that remembers"} year={"2025"} link={"/projects/open-ai"}>
        <video src="/projects/open-ai-thumbnail.mp4" loop muted autoPlay />
      </Project> */}

      {/* <Project role={"Product Design"} title={"Designing a lightweight, cross-platform feedback delivery system in Figma"} year={"2025"}>
        <img src="/projects/figma-feedback.png" className="aspect-video" draggable={false} />
      </Project>  */}

      <Project role={"Product Design"} passwordProtected={true} title={"Empowering internal teams at Asana to help new users get onboarded"} year={"Shipping 2026"} link="/projects/custom-onboarding-in-otto">
        <motion.img src="/projects/asana-logo.png" layoutId="otto-hero" className="cursor-lock" id="otto-hero" draggable={false} />
      </Project>

      <Project role={"Design Systems"} title={"Building a cross-platform design system for a fintech startup"} year={"Shipped 2023"} link={"/projects/felix-design-system"}>
        <img src="/projects/felix-design-system.png" draggable={false} />
      </Project>

      <Project role={"Product Design"} title={"Improving mentorship at SFU's largest in-person hackathon"} year={"2024"} link={"/projects/hackerhelper"}>
        <img src="/projects/hackerhelper-thumbnail.png" draggable={false} />
      </Project>

      <Project role={"Case Study in Progress"} title={"Improving Curated Work in Asana’s Team page"} year={"Shipped 2025"}>
        <video src="/projects/curated-work.mp4" loop muted autoPlay />
      </Project>

      {/* <Project role={"Case Study in Progress"} title={"Built a design direction and prototyped a pre-event microsite for Amsterdam-based Dutch Design Week"} year={"2023"}>
        <img src="/projects/ddw-thumbnail.png" draggable={false} className="cursor-in-progress" />
      </Project> */}
    </section>
  </main >)
}