import { useContext } from "react"
import { MessageContext, MessageValues } from "../context/MessagePortal.context"

export const useMsgPortal = () => {
    const context = useContext(MessageContext) as MessageValues
    if (!context) throw new Error("Message context provider is required")
    const { addMsg, msgRef } = context
    return { addMsg, msgRef }
}