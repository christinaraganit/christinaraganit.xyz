export default function Experience({ role, company, year }) {
    return <div className="w-full flex flex-col">
        <span className="headline mb-0.5">{company}</span>
        <div className="flex flex-row w-full justify-between">
            <p className="text-sm">{role}</p>
            <p className="text-sm w-fit">{year}</p>
        </div>
    </div>
}