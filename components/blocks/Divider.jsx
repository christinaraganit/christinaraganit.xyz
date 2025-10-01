export default function Divider() {
    return (<div className="flex w-full opacity-30 max-w-lg">
        <img src="/divider-start.svg" />
        <div className="bg-[url(/divider-middle.svg)] bg-repeat-x w-full bg-center"></div>
        <img src="/divider-end.svg" />
    </div>)
}