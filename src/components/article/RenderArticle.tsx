import { useEffect, useRef } from "react";
import { Gist } from "../../interfaces/gist";
import Contents, { ContentsMethods } from "./Contents";
import CodeBlock from "./CodeBlock";





const RenderArticle = ({ gist }: { gist: Gist }) => {
    const contentRefMethods = useRef<ContentsMethods>(null)
    const mainRef = useRef<HTMLDivElement>(null)
    const contentsRef = useRef<HTMLElement[]>([])
    const renderarticleRef = useRef(0)
    renderarticleRef.current++
    console.log("RenderArticle", renderarticleRef.current)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    contentRefMethods.current?.setId(entry.target.id)
                }
            })
        }, { root: null, threshold: 0.3 })

        contentsRef.current.forEach((el) => {
            observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])
    return (
        <div className='w-full  flex '>
            <section ref={mainRef} className="w-full lg:w-3/4 flex flex-col gap-4">
                <h1 id={gist.id} className='text-xl font-bold'>{gist.title}</h1>
                <p>{gist.description}</p>
                <div className="flex flex-col gap-8">
                    {
                        gist.sections.map((codeBlock, index) =>
                            <div
                                key={codeBlock.id}
                                id={codeBlock.id}
                                ref={(el) => { if (el) contentsRef.current[index] = el }}
                            >
                                <CodeBlock lan={gist.language} key={codeBlock.id} codeBlock={codeBlock} index={index} />
                            </div>
                        )
                    }
                </div>
            </section>
            <Contents mainRef={mainRef} refs={contentsRef} id={gist.id} sections={gist.sections} ref={contentRefMethods} />
        </div>
    );
};

export default RenderArticle;