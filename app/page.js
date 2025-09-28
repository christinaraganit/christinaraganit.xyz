import "./globals.css";
import Project from "./components/Project";

export default function Home() {
  return (<main className="col-span-6 md:mx-8 lg:mx-12">
    <section className="mt-12 mb-24 flex flex-col gap-5 items-center">
      <h1 className="large-title font-pixel text-center text-balance"><i>Christina</i> is a product designer who
        <i> writes code & thinks in systems</i></h1>

      <p className="text-balance text-center max-w-xl">Open to product design <span className="ampersand">&</span> design engineering roles for Summer 2026.
        Previously designed at Asana, SAP, and Felix Payment Systems.</p>
    </section>

    <section id="projects" className="grid xl:grid-cols-2 gap-8">
      <Project role={"Product Design"} title={"Empowering internal teams at Asana to drive user adoption with Custom Onboarding"} year={"2025"}>
        <img src="/placeholder.png" />
      </Project>

      <Project role={"Product Design"} title={"Designed & shipped improvements to Curated Work in Asana’s Team page"} year={"2025"}>
        <video src="/projects/curated-work.mp4" loop muted autoPlay />
      </Project>

      <Project role={"Product Design"} title={"Shipped a 3× faster check-in system for SFU’s largest hackathon"} year={"2025"}>
        <img src="/placeholder.png" />
      </Project>

      <Project role={"Product Design"} title={"Improving mentorship for participants at in-person hackathons"} year={"2024"}>
        <img src="/placeholder.png" />
      </Project>

      <Project role={<span>Visual Design <span className="ampersand-sm">&</span> Branding</span>} title={"Crafted a design direction for Amsterdam-based Dutch Design Week"} year={"2023"}>
        <img src="/placeholder.png" />
      </Project>

      <Project role={<span>Visual Design <span className="ampersand-sm">&</span> UX Design</span>} title={"Designed an accessible online shopping experience for first-time cannabis consumers"} year={"2023"}>
        <img src="/placeholder.png" />
      </Project>
    </section>
  </main>)
}