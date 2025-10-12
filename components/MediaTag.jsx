import Tag from "./Tag";

export default function MediaTag({ type, caption, className = "", ...props }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <Tag className="w-fit" text={type}></Tag>
            <p className="text-sm">{caption}</p>
        </div>
    )
}