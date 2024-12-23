import { Gist } from "../interfaces/gist";
import MainContainer from '../components/share/Section';
import RenderArticle from "../components/article/RenderArticle";
import { useEffect, useRef, useState } from "react";
import { useArticles } from "../hooks/useArticlesContext";
import { useParams } from "react-router-dom";


const CodeArticle = () => {
    const { id } = useParams()
    const [gist, setGist] = useState<Gist | undefined>();
    const { getById } = useArticles()

    const codearticleRef = useRef(0)
    codearticleRef.current++
    console.log("CodeArticle", codearticleRef.current)

    useEffect(() => {
        if (id) {
            const newGist = getById(id)
            setGist(newGist)
        }
    }, [])

    return (
        <MainContainer>
            {gist && <RenderArticle gist={gist} />}
            <div className="text-lg text-rose dark:text-gold">
                <p>Thanks for visit my site</p>
                {gist?.gitLink && <a
                    href={gist.gitLink}
                    className="text-info text-sm"
                    target="_blank"
                >
                    If you have suggestions or improvements please let me know here.
                </a>}
            </div>
        </MainContainer>

    );
};

export default CodeArticle;