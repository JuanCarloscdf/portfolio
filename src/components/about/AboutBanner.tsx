import { useEffect, useRef } from "react";
import "./abouthstyles.css"
type Props = {
    angle?: { x: number, y: number }
}
const AboutBanner = ({ angle = { x: 10, y: 10 } }: Props) => {
    const divRef = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)
    const curtainRef = useRef<HTMLDivElement | null>(null)


    useEffect(() => {
        const container = divRef.current
        const content = contentRef.current
        const curtain = curtainRef.current
        if (!container) return
        if (!content) return
        if (!curtain) return

        const { width, height, left, top } = content.getBoundingClientRect()
        let center = { x: left + width / 2, y: top + height / 2 }

        let animationFrameId: number | null = null;

        const mouseMove = (e: MouseEvent) => {
            if (animationFrameId) return
            animationFrameId = requestAnimationFrame(() => {
                animationFrameId = null
                const xdeg = ((center.x - e.clientX) / (center.x)) * angle.x
                const ydeg = ((center.y - e.clientY) / (center.y)) * angle.y

                content.style.transform = `rotateY(${xdeg}deg) rotateX(${-1 * ydeg}deg)`
                console.log(((center.y - e.clientY) / (center.y)));
                curtain.style.background = `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,${(1 - (center.y - e.clientY) / (center.y)) * 0.08}) 20%, rgba(0,212,255,0) 60%)`

            })
        }
        const resize = () => {
            const { width, height, left, top } = container.getBoundingClientRect()
            center = { x: left + width / 2, y: top + height / 2 }
        }

        const mouseLeave = () => {
            content.style.transform = "rotateY(0) rotateX(0)"
        }
        container.addEventListener("mousemove", mouseMove)
        window.addEventListener("resize", resize)
        container.addEventListener("mouseleave", mouseLeave)
        return () => {
            container.removeEventListener("mousemove", mouseMove)
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resize)
            container.addEventListener("mouseleave", mouseLeave)
        }
    }, [])
    return (
        <div className="w-full ">
            <div className="main-about-container" ref={divRef}>
                <div className="about-info" >
                    <h1 className=" text-xl  xs:text-xxl font-bold ">Hello!, my name is <span className="text-rose dark:text-gold">Juan Carlos</span>  </h1>
                    <p>
                        Hi! I’m web developer passionate about creating intuitive digital experiences. My journey began in 2022 when I saw the potential of web technologies to support small businesses online.
                    </p>
                    <p>
                        My standout project, <a href="https://www.yasminmodas.store" target="_blank" className=" text-rose dark:text-gold">yasminmodas.store</a>, is an e-commerce site for a fashion business in Brazil, where I honed my frontend. This experience solidified my commitment to accessibility and performance best practices.
                    </p>
                    <p>
                        I focus on building accessible, optimized sites that are easy to navigate and user-friendly.
                    </p>
                    <h2>Here are some of the technologies I’ve been working with recently:</h2>
                    <div className="w-full px-4">
                        <ul className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] list-disc text-rose dark:text-gold">
                            <li>JavaScript (ES6+)</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Cloudflare Workers</li>
                            <li>Cloudflare Pages</li>
                            <li>Hono</li>
                        </ul>
                    </div>

                </div>
                <div className="poster-container">
                    <div className="poster" ref={contentRef}>
                        <div className="layer frame"></div>
                        <img src="https://i.imgur.com/QNq0uyM.png" className="layer stars01" />
                        <img src="https://i.imgur.com/hNDbcVM.png" className="layer stars02" />
                        <img src="https://i.imgur.com/Ou2sTdG.png" className="layer stars03" />
                        <img src="https://i.imgur.com/LFMuWH5.png" className="layer stars04" />
                        <img src="https://i.imgur.com/W4YnJq0.png" className="layer ts" />
                        <img src="https://i.imgur.com/scK56a0.png" className="layer js" />
                        <img src="https://i.imgur.com/kqgrniE.png" className="layer react" />
                        <div className="layer curtain" ref={curtainRef}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;