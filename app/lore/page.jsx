"use client";
import Navigation from "../../components/Navigation";
import PixelBorderBox from "../../components/PixelBorderBox";
import InventoryBox from "../../components/InventoryBox";
import Tag from "../../components/Tag";
import Experience from "../../components/Experience";

import Album from "../../components/Album";
import Divider from "../../components/blocks/Divider";
import { AnimatePresence, motion } from "framer-motion";
import Award from "../../components/Award";

export default function Lore() {
    return (
        // lg:h-[calc(100dvh-9rem)] lg:max-h-[calc(100dvh-5rem)]
        <main className="max-w-[80rem]  grid lg:grid-cols-2 gap-4 lg:gap-8 items-center m-8 lg:mx-auto">
            <div className="flex flex-col gap-4 lg:gap-8 w-full h-full">
                <PixelBorderBox className="w-full">
                    <div className="flex flex-col gap-8 w-full h-full p-2">
                        <div className="flex flex-col justify-center items-center gap-8">
                            <img src="/christina-pixel-portrait.png" className="w-[96px] h-auto m-auto" />
                            <div className="flex flex-col w-full mb-2 text-center">
                                <h1 className="large-title mb-1">Christina Raganit</h1>
                                <p className="title-1 italic">Product Designer</p>
                            </div>
                        </div>

                        <div className="mx-auto">
                            <Divider />
                        </div>


                        <div className="flex-1 h-full gap-8 w-full flex flex-col justify-between">
                            <div className="flex flex-col">
                                <Tag text={"BIOGRAPHY"} className="w-20 mb-5" />
                                <p className="mb-4">I fell in love with design in the lecture halls of my computer science classes at BCIT. I initially dreamt of being a software developer so that I can build things that'll make the world a better place but it turns out, I wanted to design them, too.</p>

                                <p className="mb-4">After graduating with my diploma in Computer Systems Technology, I enrolled into the Interactive Arts and Technology program at Simon Fraser University, where I am currently sharpening my skills in design as a fourth-year student, leading the product design team at SFU Surge, and being mentored by Naheel Jawaid at Silicon Valley School of Design.</p>

                                <p className="mb-4">When I am not tinkering away on Figma or munching on pizza at a hackathon somewhere, you can usually find me...</p>

                                <ul className="list-disc list-inside">
                                    <li>Losing all my League of Legends games</li>
                                    <li>Jamming to my favorite blink-182 songs, and</li>
                                    <li>Reading stories about magic and dragons</li>
                                </ul>
                            </div>

                            {/* <div className="mx-auto">
                            <Divider />
                        </div>

                        <div>
                            <div className="flex mb-8 flex-col gap-y-7 [&>div]:flex [&>div]:flex-row [&>div]:gap-10 [&>div]:flex-col">
                                <div>
                                    <div>
                                        <Tag text={"LOCATION"} className="w-16" />
                                    </div>
                                    <p className="flex-1 leading-tight text-balance">Vancouver, BC</p>
                                </div>

                                <div>
                                    <div>
                                        <Tag text={"LIKES"} className="w-16" />
                                    </div>
                                    <span className="flex-1 -mt-1">Playing League of Legends, reading fantasy books, and drinking matcha lattes</span>
                                </div>

                                <div>
                                    <div>
                                        <Tag text={"DISLIKES"} className="w-16" />
                                    </div>
                                    <span className="flex-1">Playing League of Legends, not getting enough sleep</span>
                                </div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </PixelBorderBox>

                <PixelBorderBox className="w-full">
                    <div id="library" className="w-full">
                        <div className="flex justify-between mb-7 items-center">
                            <Tag text={"LIBRARY"} className="w-16" />
                            <span className="italic text-sm opacity-60">Christina's favorite albums</span>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-6">
                            <Album albumCover={"/library/hybrid-theory.png"} albumTitle={"Hybrid Theory"} artist={"Linkin Park"} releaseYear={"2001"} />
                            <Album albumCover={"/library/btr.png"} albumTitle={"BTR"} artist={"Big Time Rush"} releaseYear={"2010"} />
                            <Album albumCover={"/library/requiem.png"} albumTitle={"Requiem"} artist={"Keshi"} releaseYear={"2024"} />
                        </div>
                    </div>
                </PixelBorderBox>

                <PixelBorderBox className="w-full">
                    <div id="inventory" className="w-full">
                        <div className="flex justify-between mb-5 items-center">
                            <Tag text={"INVENTORY"} className="w-16" />
                            <span className="italic text-sm opacity-60">Hover to inspect the item</span>
                        </div>
                        <div className="w-full grid grid-cols-4 sm:grid-cols-6 gap-1">
                            <InventoryBox icon="/inventory/book.svg" name={"A paperback novel"} description={"On the cover is a cyborg foot wearing a bright red slipper."} />

                            <InventoryBox icon="/inventory/wallet.svg" name={"Christina's wallet"} description={"Wait a minute, there's nothing here!"} />
                            <InventoryBox icon="/inventory/cookie.svg" name="A chocolate chip cookie
" description={"It's quite crumbly. She must be saving it for later."} />
                            <InventoryBox icon="/inventory/mouse.svg" name={"A Logitech Lift Vertical mouse"} description={"It's a strange form factor, but it helps with her wrist pain."} />
                            <InventoryBox icon="/inventory/camera.svg" name={"A digicam"} description={"The settings are entirely in Japanese. Thing is, Christina doesn't speak Japanese."} />
                            <InventoryBox icon={"/inventory/question-blue.svg"} name={"An internship for Summer 2026"} description={"Looks like there's nothing here yet. ...Maybe you could change that?"} />
                        </div>
                    </div>
                </PixelBorderBox>


            </div>

            <div className="flex flex-col gap-4 lg:gap-8 w-full h-full">
                <PixelBorderBox className="w-full flex flex-row">
                    <div className="w-full">
                        <Tag text={"EXPERIENCE"} className="w-20 mb-5" />
                        <div className="-mt-1 w-full flex flex-col gap-4">
                            <Experience role={"Product Design Intern"} company={"Asana"} year={"2025"} />
                            <Experience role={"UA Design Intern"} company={"SAP"} year={"2024–2025"} />
                            <Experience role={"UX Designer"} company={"Felix Payment Systems"} year={"2022–2024"} />
                            <Experience role={"UX Designer"} company={"Karma Well Health Technologies"} year={"2021–2022"} />
                            <Experience role={"QA Tester"} company={"Electronic Arts"} year={"2020"} />
                        </div>
                    </div>

                </PixelBorderBox>

                <PixelBorderBox className="w-full">
                    <div className="w-full">
                        <Tag text={"EDUCATION"} className="w-20 mb-5" />
                        <div className="-mt-1 w-full flex flex-col gap-4">
                            <Experience role={"6-month design fellowship by Google Innovation Designer"} company={"Design Fellow at Silicon Valley School of Design"} year={"2025"} />
                            <Experience role={"Simon Fraser University"} company={"BS, Interactive Arts & Technology"} year={"2021-2025"} />
                            <Experience role={"British Columbia Institute of Technology"} company={"Diploma in Computer Systems Technology"} year={"2019–2021"} />
                        </div>
                    </div>
                </PixelBorderBox>
                <PixelBorderBox className="w-full">
                    <div className="overflow-y-auto h-full w-full">
                        <Tag text={"AWARDS"} className="w-20 mb-5" />
                        <div className="-mt-1 w-full flex flex-col gap-4">
                            <Award award={"2nd Place"} awardedBy={"CreateSC 2025"} year={"2025"} />
                            <Award award={"Undergraduate Open Scholarship"} awardedBy={"Simon Fraser University"} year={"2024"} />
                            {/* <Award award={"Nancy Morrison and Fraser Green Special Abilities Award"} awardedBy={"Simon Fraser University"} year={"2023"} /> */}
                            {/* <Award award={"Undergraduate Open Scholarship"} awardedBy={"Simon Fraser University"} year={"2023"} /> */}
                            <Award award={"2nd Place & Best UI/UX Design"} awardedBy={"StormHacks"} year={"2023"} />
                            <Award award={"1st Place & Best Design"} awardedBy={"cmd-f"} year={"2023"} />
                            <Award award={"Judges' Choice Award"} awardedBy={"RootHacks"} year={"2023"} />
                            <Award award={"2nd Place"} awardedBy={"HackED"} year={"2023"} />
                            <Award award={"Computer Systems Award in Tech Entrepreneurship"} awardedBy={"British Columbia Institute of Technology"} year={"2021"} />
                            <Award award={"President's Entrance Award"} awardedBy={"British Columbia Institute of Technology"} year={"2019"} />
                            <Award award={"BC Excellence Award"} awardedBy={"Government of British Columbia"} year={"2019"} />
                            <Award award={"District Authority Award"} awardedBy={"Government of British Columbia"} year={"2019"} />
                        </div>
                    </div>
                </PixelBorderBox>

                {/* <PixelBorderBox className="w-full">
                    <div id="inventory" className="w-full">
                        <h2 className="headline italic mb-3">Achievements</h2>
                        <div className="w-full grid grid-cols-4 sm:grid-cols-6 gap-1">
                            <InventoryBox icon="/inventory/trophy.svg" name={"2nd Place at CreateSC 2025"} description={"Awarded to project Hear Me Out Cake by Innovative Design at USC"} />

                            <InventoryBox icon="/inventory/award.svg" name={"Undergraduate Open Scholarship"} description={"Awarded by Simon Fraser University"} />
                            <InventoryBox icon="/inventory/award.svg" name="Nancy Morrison and Fraser Green Special Abilities Award
" description={"Awarded by Simon Fraser University"} />
                            <InventoryBox icon="/inventory/award.svg" name={"Undergraduate Open Scholarship"} description={"Awarded by Simon Fraser University"} />
                            <InventoryBox icon="/inventory/trophy.svg" name={"2nd Place at StormHacks 2023"} description={"Awarded to project Watchdog by SFU Surge"} />
                            <InventoryBox icon="/inventory/trophy.svg" name={"Best UI/UX Design at StormHacks 2023"} description={"Awarded to project Watchdog by SFU Surge"} />

                            <InventoryBox icon="/inventory/trophy.svg" name={"1st Place at Eunoia UX Hackathon"} description={"Awarded to project Proud Zebra by IATSU"} />

                            <InventoryBox icon="/inventory/trophy.svg" name={"Best Design at cmd-f 2023"} description={"Awarded to project Chow Now by Iris Labs"} />
                            <InventoryBox icon="/inventory/trophy.svg" name={"1st Place at cmd-f 2023"} description={"Awarded to project Chow Now by nwPlus"} />
                            <InventoryBox icon="/inventory/trophy.svg" name={"Judges' Choice Award at RootHacks 2023"} description={"Awarded to project Misfortune Cookie by SFU Software Systems Student Society"} />
                            <InventoryBox icon="/inventory/trophy.svg" name={"2nd Place at HackED 2023"} description={"Awarded to project Toneteller by University of Alberta Computer Engineering Club"} />
                            <InventoryBox icon="/inventory/award.svg" name={"Computer Systems Award in Tech Entrepreneurship"} description={"Awarded by British Columbia Institute of Technology"} />

                            <InventoryBox icon="/inventory/award.svg" name={"President's Entrance Award"} description={"Awarded by British Columbia Institute of Technology"} />

                            <InventoryBox icon="/inventory/award.svg" name={"BC Excellence Award"} description={"Awarded by Government of British Columbia"} />
                            <InventoryBox icon="/inventory/award.svg" name={"District Authority Award"} description={"Awarded by Government of British Columbia"} />
                        </div>
                    </div>
                </PixelBorderBox> */}

                {/* <PixelBorderBox className="flex-1">
                    <div className="flex flex-col w-full">
                        <h2 className="headline italic mb-4">Biography</h2>
                        <p className="mb-4">After graduating with my diploma in Computer Systems Technology, I enrolled into the Interactive Arts and Technology program at Simon Fraser University, where I am currently sharpening my skills in design as a fourth-year student, leading the product design team at SFU Surge, and being mentored by Naheel Jawaid at Silicon Valley School of Design.</p>
                        <p className="mb-4">When I am not tinkering away on Figma or attending a hackathon somewhere, you can usually find me...</p>


                        <div className="self-end w-fit mr-2">
                            <p className="mb-0.5 text-sm">With love,</p>
                            <div className="flex gap-2 items-center">
                                <img src="/mini-portrait.png" className="w-5 h-5" />
                                <h2 className="title-2 italic">Christina</h2>
                            </div>
                        </div>
                    </div>
                </PixelBorderBox> */}
            </div>
            <div className="lg:hidden"></div>
        </main>
    )
}