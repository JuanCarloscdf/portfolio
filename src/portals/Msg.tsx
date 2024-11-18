import { forwardRef, memo, useEffect, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import { Message } from "../interfaces/message";
import { MessageEnum } from "../enum/message.enum";
import IconColseThin from "../icons/IconColseThin";
import IconSuccess from "../icons/IconSuccess";
import IconWarning from "../icons/IconWarning";
import IconInfo from "../icons/IconInfo";


export type MsgMethods = {
    addMsg: (msg: Message) => void;
}
const Msg = forwardRef<MsgMethods>((_, ref) => {
    const [messages, setMesagges] = useState<Message[]>([]);

    console.log("render message");

    const closeMsg = (id: string) => {
        const filtered = messages.filter((msg) => msg.id !== id)
        setMesagges(filtered)
    }

    useImperativeHandle(ref, () => ({
        addMsg: (msg: Message) => {
            setMesagges((prev) => [...prev, msg])
        }
    }))

    useEffect(() => {
        let interval: any;
        if (messages.length > 0) {
            interval = setInterval(() => {
                closeMsg(messages[0].id)
            }, 4000)
        }
        return () => {
            clearInterval(interval)
        }
    }, [messages])
    return (createPortal(
        <div className={`${messages.length > 0 ? "fixed top-[70px] right-0 xs:right-[20px]" : "hidden"} z-30 text-xs`}>
            <div className="flex flex-col gap-1">
                {
                    messages.length > 0 && (
                        messages.map((msg) =>
                            <section className={`border-l-8 py-4 max-w-screen shadow-md  shadow-black dark:shadow-none bg-white/50 dark:bg-black/30 dark:text-white border-solid ${msg.type === MessageEnum.info ? "border-info/90" : msg.type === MessageEnum.success ? "border-success/90" : "border-warning/90"} flex justify-between min-w-[300px] rounded-lg p-2 gap-6 md:gap-10 items-center`} key={msg.id} style={{ backdropFilter: "blur(10px)" }}>
                                <div>
                                    {
                                        msg.type === MessageEnum.success ? <IconSuccess color="#69d58e" /> : msg.type === MessageEnum.info ? <IconInfo color="#00cfff" /> : <IconWarning color="#ec80a8" />
                                    }

                                </div>
                                <div className="flex flex-col w-full">
                                    <h2 className="font-semibold  ">{msg.title}</h2>
                                    <p className="font-light">{msg.info}</p>
                                </div>
                                <div className="h-full ">
                                    <button onClick={() => closeMsg(msg.id)} className="h-full mr-2"><IconColseThin height={"100%"} width={"18"} /></button>
                                </div>
                            </section>
                        )
                    )
                }
            </div>
        </div>,
        document.getElementById("messages") as HTMLElement))
});

export default memo(Msg);