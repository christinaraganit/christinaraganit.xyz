import Divider from "./Divider"

export default function DesignChallenge({ question, children }) {
    return (
        <div id="design-challenge" className="flex flex-col justify-center items-center gap-16">
            <Divider></Divider>

            <section className="text-center lg:mt-20 lg:mb-24">
                <h2 className="headline mb-4">Design Challenge</h2>
                <p className="body-2xl text-balance">
                    {question}
                </p>
            </section>

            <Divider></Divider>
        </div>
    )
}