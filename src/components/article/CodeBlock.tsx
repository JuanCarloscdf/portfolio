import { lazy, Suspense } from "react";
import { atomOneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeBlokT } from "../../interfaces/gist";
import CodeBlockEsqueleton from "./CodeBlockEsqueleton";
import { MessageEnum } from "../../enum/message.enum";
import { useMsgPortal } from "../../hooks/useMsgPortal";
const SyntaxHighlighter = lazy(() => import("react-syntax-highlighter"))
const CodeBlock = ({ codeBlock, index, lan }: { codeBlock: CodeBlokT, index: number, lan: string }) => {
    const { addMsg } = useMsgPortal()
    function copyToClipboard() {
        addMsg({ id: crypto.randomUUID(), info: "Code copied to clipboard asdasd asdasd asd as", title: "Success", type: MessageEnum.success })
        navigator.clipboard.writeText(codeBlock.code)
    }
    return (
        <article className="w-full flex flex-col gap-4 ">

            <div className="flex gap-2 ">
                <span className="whitespace-nowrap text-rose dark:text-gold font-extrabold ">{index + 1} .-</span>
                <h2 className="font-bold dark:text-gold">{codeBlock.title}</h2>
            </div>
            <p>{codeBlock.description}</p>
            <div className='relative pt-2 min-h-[40px] bg-slate-800 dark:bg-black/20 shadow-sm shadow-white  rounded-lg text-white' >
                <button onClick={copyToClipboard} className='absolute right-2 top-2 ml-auto shadow-sm shadow-white rounded-lg px-2 hover:shadow-gold hover:text-gold active:shadow-white active:text-white'>copy</button>
                <Suspense fallback={<CodeBlockEsqueleton />}>
                    <SyntaxHighlighter language={lan} style={theme} customStyle={{ padding: "0", backgroundColor: "transparent" }}>
                        {codeBlock.code}
                    </SyntaxHighlighter>
                </Suspense>
                
            </div>
            {codeBlock.notes && <p className='pl-4 py-2       rounded-lg'> <a target="_blank" href={codeBlock.notes.link ? codeBlock.notes.link : "#"}>{codeBlock.notes.content}</a></p>}
            {codeBlock.info && <p className='pl-4 py-2 border-l-4 border-solid       border-info     dark:info rounded-r-lg bg-info/70    dark:bg-info/50 '> <a target="_blank" href={codeBlock.info.link ? codeBlock.info.link : "#"}>{codeBlock.info.content}</a></p>}
            {codeBlock.warning && <p className='pl-4 py-2 border-l-4 border-solid    border-warning  dark:warning rounded-r-lg bg-warning/80    dark:bg-warning/50 '> <a target="_blank" href={codeBlock.warning.link ? codeBlock.warning.link : "#"}>{codeBlock.warning.content}</a></p>}
        </article>
    );
};



export default CodeBlock;