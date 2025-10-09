import PixelBorderBox from "./PixelBorderBox";

export default function Tag({ text, children, className = "" }) {
    return (<PixelBorderBox color="white-xs" size="sm"
        className={`${className}`}>
        <span className="font-pixel-mono -mb-2 -mt-2.5 text-xl mx-auto w-full text-center">{text}</span>
    </PixelBorderBox>)
        ;
}