import { useRef, useState } from "react";
import "./skew.css"
const SkeewedTitle = () => {
    const [textSkew, setTextSkew] = useState("Welcome,  Dream Big!");
    const skewContRef = useRef<HTMLParagraphElement>(null)

    function handleMouseEnter(index: number) {
        const container = skewContRef.current
        if (!container) return
        if (index % 2 !== 0 && index >= 0) {
            const actual = container.children[index] as HTMLElement
            const before = container.children[index - 1] as HTMLElement

            if (actual && before) {
                actual.classList.add("push-text")
                before.classList.add("push-text")

            }
        } else if (index % 2 === 0 && index >= 0) {
            const actual = container.children[index] as HTMLElement
            const after = container.children[index + 1] as HTMLElement
            if (actual && after) {
                actual.classList.add("push-text")
                after.classList.add("push-text")
            }
        }
    }

    function handleMouseLeave(index: number) {
        const container = skewContRef.current
        if (!container) return
        if (index % 2 !== 0 && index >= 0) {
            const actual = container.children[index] as HTMLElement
            const before = container.children[index - 1] as HTMLElement

            if (actual && before) {
                actual.classList.remove("push-text")
                before.classList.remove("push-text")

            }
        } else if (index % 2 === 0 && index >= 0) {
            const actual = container.children[index] as HTMLElement
            const after = container.children[index + 1] as HTMLElement
            if (actual && after) {
                actual.classList.remove("push-text")
                after.classList.remove("push-text")
            }
        }
    }
    return (
        <div className="mt-4">
           {/*  <div className="main-cont">
                <div className="title-cont">
                    <h1 className="">TEN UN BUEN DIA</h1>
                    <h1 className="">TEN UN BUEN DIA</h1>
                </div>
            </div> */}
            <p ref={skewContRef} className="skew-title">
                {
                    textSkew.length > 0 && (
                        textSkew.split("").map((letter, index) => {
                            return letter === " " ? <strong key={index} className="inline-block w-[1rem]">{letter}</strong> : <span className="" onMouseLeave={() => handleMouseLeave(index)} onMouseEnter={() => handleMouseEnter(index)} key={index}>{letter}</span>;
                        })
                    )
                }
            </p>
            <div className="mt-4 rounded-lg p-2">
                <label className="text-xs bg-rose dark:bg-gold  rounded-xl px-2 text-white dark:text-black " htmlFor="skew-message-textarea">Change the message</label>
                <textarea
                    id="skew-message-textarea"
                    placeholder="type your message"
                    className=" mt-2 w-full bg-black/80 text-white p-2 truncate rounded-lg h-[40px]"
                    onChange={(e) => setTextSkew(e.target.value)}
                    value={textSkew}
                />
            </div>
        </div>
    );
};

export default SkeewedTitle;