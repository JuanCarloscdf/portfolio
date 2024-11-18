import { MessageEnum } from "../enum/message.enum";

export type Message = {
    id: string,
    title: string,
    info: string,
    type: MessageEnum,
}