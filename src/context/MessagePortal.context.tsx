import { createContext, ReactNode, useCallback, useRef } from "react";
import { MsgMethods } from "../portals/Msg";
import { Message } from "../interfaces/message";


export type MessageValues = {
    addMsg: (msg: Message) => void,
    msgRef: React.MutableRefObject<MsgMethods | null>
}

export const MessageContext = createContext<MessageValues | null>(null)

export const MessageProvider = ({ children }: { children: ReactNode }) => {

    const msgRef = useRef<MsgMethods>(null)

    const addMsg = useCallback((msg: Message) => {
        msgRef.current?.addMsg(msg)
    }, [])
    const value = {
        addMsg,
        msgRef
    }
    return (
        <MessageContext.Provider value={value}>
            {children}
        </MessageContext.Provider>
    )
}