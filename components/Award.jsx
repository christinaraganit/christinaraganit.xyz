export default function Award({ award, awardedBy, year }) {
    return (
        <div className="flex flex-row w-full justify-between">
            <span className="headline-sm mb-0.5">{award}</span>
            <p className="text-sm w-fit">{year}</p>
        </div>)
}