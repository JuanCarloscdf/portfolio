import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Gist } from "../../interfaces/gist";


export type ContentsMethods = {
    setId: (id: string) => void,
}
const Contents = forwardRef<ContentsMethods, Gist>(({sections, id}, ref) => {
    const [blockId, setBlockId] = useState("");
    /* const contentsRef = useRef(0)
    contentsRef.current ++
    console.log("Contents",contentsRef.current) */

    useImperativeHandle(ref, () => ({
        setId: (id: string) => {            
            setBlockId(id)
        }
    }))

    return (
        <aside className="hidden lg:block lg:w-1/4">
            <div className="sticky top-[120px] pl-2 lg:pl-8">
                <h1  className="text-base font-light mb-4 "><span className="hidden lg:inline">TABLE OF CONTENTS</span></h1>
                <a className="block mb-4 text-xs hover:text-rose dark:hover:text-gold font-extalight" href={`#${id}`}>Introduction</a>
                <ul className="marker:text-rose  dark:marker:text-gold flex flex-col gap-3 list-decimal pl-6 text-xs">
                    {
                        sections.map((item) =>
                            <li key={item.id} className={`hover:text-rose dark:hover:text-gold ${blockId === item.id ? "text-rose dark:text-gold": "" } `}><a href={`#${item.id}`}>{item.title}</a></li>
                        )
                    }
                </ul>
            </div>
        </aside>
    );
});

export default Contents;