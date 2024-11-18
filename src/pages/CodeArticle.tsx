import { Gist } from "../interfaces/gist";
import Section from '../components/share/Section';
import CodeBlock from "../components/article/CodeBlock";
import { useEffect, useRef, useState } from "react";
import Contents, { ContentsMethods } from "../components/article/Contents";
import { useParams } from "react-router-dom";
import { useArticles } from "../hooks/useArticlesContext";






const CodeArticle = () => {
    const contentRefMethods = useRef<ContentsMethods>(null)
    const contentsRef = useRef<HTMLElement[]>([])
    const [gist, setGist] = useState<Gist>();
    const { id } = useParams()
    const { loading ,getById } = useArticles()

    const codearticleRef = useRef(0)
    codearticleRef.current++
    console.log("CodeArticle", codearticleRef.current)

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
    useEffect(() => {
        if (id) {
            const newGist = getById(id)
            console.log(newGist);
            
            if (newGist) {
                setGist(newGist)
            }
        }
    }, [])
    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <Section>
            { gist && <div className='w-full  flex mb-8  xs:px-[5vw] md:px-[8vw] lg:px-[10vw]'>
                <div className="w-full lg:w-3/4 flex flex-col gap-4">
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
                                    <CodeBlock key={codeBlock.id} codeBlock={codeBlock} index={index} />
                                </div>
                            )
                        }
                    </div>
                </div>
                <Contents category={gist.category} title={gist.title} description={gist.title} id={gist.id} sections={gist.sections} ref={contentRefMethods} />
            </div>}
        </Section>

    );
};

export default CodeArticle;