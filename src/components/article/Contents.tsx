import { forwardRef, MutableRefObject, useImperativeHandle, useState } from "react";
import { CodeBlokT } from "../../interfaces/gist";


export type ContentsMethods = {
    setId: (id: string) => void,
}

type Props = {
    sections: CodeBlokT[]
    id: string
    refs: MutableRefObject<HTMLElement[]>
    mainRef: MutableRefObject<HTMLDivElement | null>
}
const Contents = forwardRef<ContentsMethods, Props>(({ mainRef, refs, sections }, ref) => {
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
                <h1 className="text-base font-light mb-4 "><span className="hidden lg:inline">TABLE OF CONTENTS</span></h1>
                <button className="inline mb-4 text-xs hover:text-rose dark:hover:text-gold font-extalight"
                    onClick={() => { mainRef.current?.scrollIntoView() }}
                >Introduction</button>
                <ul className="marker:text-rose  dark:marker:text-gold flex flex-col gap-3 list-decimal list-image-top pl-6 text-xs">
                    {
                        sections.map((item, index) =>
                            <li
                                key={item.id}
                                className={`hover:text-rose dark:hover:text-gold ${blockId === item.id ? "text-rose dark:text-gold" : ""}`}
                            >
                                <button
                                    className="block text-start"
                                    onClick={() => { refs.current[index].scrollIntoView() }}
                                >
                                    {item.title}
                                </button>
                            </li>
                        )
                    }
                </ul>
            </div>
        </aside>
    );
});

export default Contents;