export default function Album({ albumCover, albumTitle, artist, releaseYear }) {
    return (
        <div className="w-full flex gap-6 lg:flex-col lg:gap-4 items-center lg:items-start">
            <div className="flex flex-row">
                <img src={albumCover} className="h-[96px] w-[96px] z-12"></img>
                <div className="relative h-[96px] w-[96px] -ml-8">
                    <img src={"/library/record-new.png"} className="absolute h-[96px] w-[96px] z-10"></img>
                    {/* <img src={albumCover} className="h-[36px] w-[36px] absolute top-[30px] left-[30px] z-1"></img> */}
                </div>
            </div>

            <div>
                <h3 className="title-2 mb-1">{albumTitle}</h3>
                <p className="mb-0.5">{artist}</p>
                <p className="text-sm opacity-75">{releaseYear}</p>
            </div>
        </div>
    )
}