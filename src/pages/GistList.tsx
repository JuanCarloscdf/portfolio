import { useEffect, useRef, useState } from "react";
import { useArticles } from "../hooks/useArticlesContext";
import { useParams } from "react-router-dom";
import MainContainer from "../components/share/Section";
import { Gist } from "../interfaces/gist";
import SectionTitle from "../components/share/SectionTitle";
import GistSender from "../components/gistlist/GistSender";

const GistList = () => {
    const { category } = useParams()
    const { getByCat } = useArticles()

    const [catList, setCatList] = useState<Gist[]>([]);
    const gistlistRef = useRef(0)
    gistlistRef.current++
    console.log("GistList", gistlistRef.current)

    useEffect(() => {
        if (category) {
            const newList = getByCat(category)
            if (newList) {
                setCatList(newList)
            }
        }
    }, [])
    return (
        <MainContainer>
            {category && <SectionTitle text={category}></SectionTitle>}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">
                {
                    catList && catList.map((item)=>
                        <GistSender key={item.id} item={item}/>
                    )
                }
            </div>
        </MainContainer>
    );
};

export default GistList;