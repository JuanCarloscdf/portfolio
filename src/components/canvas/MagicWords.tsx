import { ChangeEvent, useEffect, useRef, useState } from "react";
import Button from "../share/Button";
import IconReset from "../../icons/IconReset";
import IconDownload from "../../icons/IconDownload";

interface Point {
    x: number;
    y: number;
}

const MagicWords = ({ canvasHeight = 550 }: { canvasHeight: number }) => {
    const [text, setText] = useState("✮꩜ .ᐟ");
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const p2Ref = useRef<Point>({ x: 0, y: 0 });
    const p1Ref = useRef<Point>({ x: 0, y: 0 });
    const drawRef = useRef<boolean>(false);
    const once = useRef(true)
    const initialText = " ❤️ ❤️ Reset and play, you can change the text bellow ;)";
    const cnt = useRef<number>(0);
    const colors = ["#1f78b4", "#33a02c", "#e31a1c", "#ff7f00", "#6a3d9a"];
    let colorsCnt = 0;
    const canvasHeightPx = `h-[${canvasHeight}px]`;

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value);
        cnt.current = 0;
    }

    function reset() {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
        cnt.current = 0;
    }

    function download() {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "screenshot.png";
        link.click();
    }


    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;
        const ctx = canvas.getContext("2d")
        if (!ctx) return
        const resizeObserver = new ResizeObserver(() => {
            canvas.width = container.offsetWidth;
            canvas.height = canvasHeight;
            if (once.current) {
                let pos = { x: 10, y: 70 };
                initialText.split("").forEach((letter) => {
                    ctx.font = `48px "Noto Color Emoji", Poppins`
                    const fontWidth = ctx.measureText(letter).width;
                    if (pos.x > canvas.width - 50) pos = { x: 10, y: pos.y + 80 };
                    ctx.fillStyle = colors[colorsCnt];
                    ctx.fillText(letter, pos.x, pos.y);
                    colorsCnt++;
                    if (colorsCnt > colors.length - 1) colorsCnt = 0;
                    pos.x += fontWidth;
                });
                once.current = false
            }
        });

        if (container) {
            resizeObserver.observe(container);
        }

        return () => {
            if (container) resizeObserver.unobserve(container);
        };
    }, [canvasHeight]);


    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const container = containerRef.current
        if (!container) return;

        const mouseDown = (e: MouseEvent) => {
            const { top, left } = canvas.getBoundingClientRect();
            p1Ref.current = { x: e.clientX - left, y: e.clientY - top };
            drawRef.current = true;
        };

        const mouseUp = () => {
            drawRef.current = false;
        };

        const mouseMove = (e: MouseEvent) => {
            if (!drawRef.current) return;

            const { top, left } = canvas.getBoundingClientRect();
            p2Ref.current = { x: e.clientX - left, y: e.clientY - top };

            const { x: x1, y: y1 } = p1Ref.current;
            const { x: x2, y: y2 } = p2Ref.current;

            const d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            const fontSize = 3 + d / 2;
            const letter = text[cnt.current];
            ctx.font = `${fontSize}px "Noto Color Emoji"`;
            const stepSize = ctx.measureText(letter).width;

            if (d > stepSize) {
                const angle = Math.atan2(y2 - y1, x2 - x1);
                ctx.fillStyle = colors[colorsCnt];
                ctx.save();
                ctx.translate(x1, y1);
                ctx.rotate(angle);
                ctx.fillText(letter, 0, 0);
                ctx.restore();
                cnt.current = (cnt.current + 1) % text.length;
                colorsCnt = (colorsCnt + 1) % colors.length;
                p1Ref.current.x = x1 + Math.cos(angle) * stepSize;
                p1Ref.current.y = y1 + Math.sin(angle) * stepSize;
            }
        };

        canvas.addEventListener("mousedown", mouseDown);
        canvas.addEventListener("mousemove", mouseMove);
        canvas.addEventListener("mouseup", mouseUp);
        canvas.addEventListener("mouseleave", mouseUp);

        return () => {
            canvas.removeEventListener("mousedown", mouseDown);
            canvas.removeEventListener("mousemove", mouseMove);
            canvas.removeEventListener("mouseup", mouseUp);
            canvas.removeEventListener("mouseleave", mouseUp);
        };
    }, [text]);

    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-2">
                <Button onClick={reset}>
                    <span className="hidden sm:block ">Reset</span>
                    <IconReset className="hover:animate-bell" height="18" width="18" />
                </Button>
                <Button onClick={download}>
                    <span className="hidden sm:block ">Download</span>
                    <IconDownload className="hover:animate-bell" height="20" width="20" />
                </Button>
            </div>
            <div ref={containerRef} className={`border-[1px] bg-white border-solid border-black/20 w-full ${canvasHeight ? canvasHeightPx : 'h-[500px]'} rounded-3xl shadow-lg shadow-black dark:shadow-none font-mono`}>
                <canvas ref={canvasRef} className="w-full h-full block" />
            </div>
            <textarea
                className="w-full bg-black/80 text-white p-2 truncate rounded-lg h-[40px]"
                onChange={handleChange}
                value={text}
            />
            <a href="https://emojidb.org/star-emojis" target="_blank">Here emojis!!</a>
        </div>
    );
};

export default MagicWords;
