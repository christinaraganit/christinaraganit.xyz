import Link from "next/link";

export default function Project({ title, passwordProtected = false, role, year, children, prominent = false, link }) {
    const Container = link ? Link : 'div';
    const containerProps = link ? { href: link } : {};

    return (<div className={`${prominent ? 'col-span-1 xl:col-span-2' : 'col-span-1'}`}>
        <Container {...containerProps} className={``}>
            <div
                className={`aspect-video w-full h-auto ${link ? 'cursor-gauntlet' : ''} ${passwordProtected ? 'cursor-lock' : ''} ${prominent ? 'mask-border-prominent' : 'mask-border-sm'} mask-no-repeat mask-center mask-size-contain`}
            >
                {children}
            </div>
            <div className="flex flex-col gap-2 py-6 cursor-sword">
                <div className="flex items-row gap-2">
                    <p className="text-base">{role}</p>
                    <img src="/separator.svg" className="Star as separator"></img>
                    <p>{year}</p>
                </div>
                <h2 className="title-1">{title}</h2>
            </div>
        </Container>
    </div>)
}