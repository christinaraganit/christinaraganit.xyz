export default function Award({ award, awardedBy, year }) {
    return <div className="w-full flex flex-col">
        <span className="headline mb-0.5">{award}</span>
        <div className="flex flex-row w-full justify-between">
            <p className="text-sm">{awardedBy}</p>
            <p className="text-sm w-fit">{year}</p>
        </div>
    </div>
}