"use client";
import Navigation from "../../components/Navigation";
import PixelBorderBox from "../../components/PixelBorderBox";
import StylizedProfileBorderBox from "../../components/StylizedProfileBorderBox";
import InventoryBox from "../../components/InventoryBox";
import Tag from "../../components/Tag";
import Experience from "../../components/Experience";

import Divider from "../../components/blocks/Divider";
import { AnimatePresence, motion } from "framer-motion";
import Award from "../../components/Award";

export default function Lore() {
    return (
        <main className="max-w-[80rem] lg:h-[calc(100dvh-9rem)] max-h-[calc(100dvh-5rem)] grid lg:grid-cols-2 gap-4 lg:gap-8 items-center m-8 lg:mb-8 lg:mx-auto">

            <PixelBorderBox className="h-full w-full">
                <div className="flex flex-col gap-8 w-full h-full p-2">
                    <div className="flex flex-row justify-center items-center gap-6">
                        {/* <StylizedProfileBorderBox className="w-28 h-28 aspect-square">
                            <img src="/portrait-lg-2.png" className="w-16 h-16 m-auto" />
                        </StylizedProfileBorderBox> */}
                        <div className="flex flex-col w-full mb-2">
                            <h1 className="large-title mb-1">Christina Raganit</h1>
                            <p className="title-1 italic">Product Designer</p>
                        </div>
                    </div>

                    <div className="flex-1 h-full gap-8 w-full flex flex-col justify-between">
                        <div className="flex flex-col">
                            <Tag text={"BIOGRAPHY"} className="w-20 mb-5" />
                            <p className="mb-4">After graduating with my diploma in Computer Systems Technology, I enrolled into the Interactive Arts and Technology program at Simon Fraser University, where I am currently sharpening my skills in design as a fourth-year student, leading the product design team at SFU Surge, and being mentored by Naheel Jawaid at Silicon Valley School of Design.</p>
                            {/* 
                            <p className="mb-4">When I am not tinkering away on Figma or attending a hackathon somewhere, you can usually find me...</p> */}


                            <div className="self-end w-fit mr-2">
                                <p className="mb-0.5 text-sm">With love,</p>
                                <div className="flex gap-2 items-center">
                                    <img src="/mini-portrait.png" className="w-5 h-5" />
                                    <h2 className="title-2 italic">Christina</h2>
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto">
                            <Divider />
                        </div>

                        <div>
                            <div className="flex mb-8 flex-col gap-y-7 [&>div]:flex [&>div]:flex-row [&>div]:gap-10 [&>div]:flex-col">
                                <div>
                                    <div>
                                        <Tag text={"LOCATION"} className="w-20" />
                                    </div>
                                    <p className="flex-1 leading-tight text-balance">Vancouver, BC</p>
                                </div>

                                <div>
                                    <div>
                                        <Tag text={"LIKES"} className="w-20" />
                                    </div>
                                    <span className="flex-1 -mt-1">Playing League of Legends, reading fantasy books, and drinking matcha lattes</span>
                                </div>

                                <div>
                                    <div>
                                        <Tag text={"DISLIKES"} className="w-20" />
                                    </div>
                                    <span className="flex-1">Playing League of Legends, not getting enough sleep</span>
                                </div>
                            </div>

                            <div>
                                <Tag text={"INVENTORY"} className="w-20 mb-2" />
                                <div className="w-full grid grid-cols-4 sm:grid-cols-6 gap-1">
                                    <InventoryBox icon="/inventory/cookie.svg" name={"Matcha chocolate chip cookie"} description={"Christina must be saving it for later."} />
                                    <InventoryBox icon="/inventory/wallet.svg" name="Christina's wallet" description={"...Wait a minute, there's nothing here."} />
                                    <InventoryBox icon="/inventory/mouse.svg" name={"Logitech Lift Vertical Mouse"} description={"It’s a strange form factor, but it helps with her joint pain."} />
                                    <InventoryBox icon="/inventory/book.svg" name={"A well-loved book"} description={"The spine is worn from use. On the cover is a cyborg foot wearing a bright red slipper."} />
                                    <PixelBorderBox color="light-blue"></PixelBorderBox>
                                    <PixelBorderBox color="light-blue"></PixelBorderBox>
                                    <PixelBorderBox color="light-blue" className="sm:hidden"></PixelBorderBox>
                                    <PixelBorderBox color="light-blue" className="sm:hidden"></PixelBorderBox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PixelBorderBox>

            <div className="flex flex-col gap-4 lg:gap-8 w-full h-full">
                <PixelBorderBox className="w-full">
                    <div className="w-full">
                        <Tag text={"EXPERIENCE"} className="w-20 mb-5" />
                        <div className="-mt-1 w-full flex flex-col gap-4">
                            <Experience role={"Product Design Intern"} company={"Asana"} year={"2025"} />
                            <Experience role={"UA Design Intern"} company={"SAP"} year={"2024–2025"} />
                            <Experience role={"UX Designer"} company={"Felix Payment Systems"} year={"2022–2024"} />
                            <Experience role={"UX Designer"} company={"Karma Well Health Technologies"} year={"2021–2022"} />
                        </div>
                    </div>
                </PixelBorderBox>

                <PixelBorderBox className="w-full">
                    <div className="w-full">
                        <Tag text={"AWARDS"} className="w-20 mb-5" />
                        <div className="-mt-1 w-full flex flex-col gap-4">
                            <Award award={"2nd Place at CreateSC"} awardedBy={"Innovative Design at USC"} year={"2025"} />
                            {/* <Award award={"Undergraduate Open Scholarship"} awardedBy={"Simon Fraser University"} year={"2024"} />
                            <Award award={"Nancy Morrison and Fraser Green Special Abilities Award"} awardedBy={"Simon Fraser University"} year={"2023"} />
                            <Award award={"Undergraduate Open Scholarship"} awardedBy={"Simon Fraser University"} year={"2023"} /> */}
                            <Award award={"2nd Place at StormHacks"} awardedBy={"SFU Surge"} year={"2023"} />
                            <Award award={"Best UI/UX Design at StormHacks"} awardedBy={"SFU Surge"} year={"2023"} />
                            <Award award={"1st Place at Eunoia UX Hackathon"} awardedBy={"IATSU"} year={"2023"} />
                            <Award award={"Best Design at cmd-f"} awardedBy={"Iris Labs"} year={"2023"} />
                            <Award award={"1st Place at cmd-f"} awardedBy={"nwPlus"} year={"2023"} />
                            <Award award={"Judges' Choice Award at RootHacks"} awardedBy={"SFU Software Systems Student Society"} year={"2023"} />
                            <Award award={"2nd Place at HackED"} awardedBy={"University of Alberta Computer Engineering Club"} year={"2023"} />
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
        </main>
    )
}