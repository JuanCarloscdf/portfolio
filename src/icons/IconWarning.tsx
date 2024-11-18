import { SVGProps } from "react";

const IconWarning = (props: SVGProps<SVGSVGElement>) => {

    return (
        <svg
            height={props.height ? props.height : "32"}
            width={props.width ? props.width : undefined}
            viewBox="0 0 32 32"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg">

            <path d="M3.35964 32H28.6404C31.2255 32 32.837 28.8579 31.5445 26.3554L18.9041 1.87682C17.6115 -0.625606 14.3885 -0.625606 13.0959 1.87682L0.455542 26.3554C-0.837032 28.8579 0.774489 32 3.35964 32ZM16 18.8293C15.0767 18.8293 14.3213 17.9827 14.3213 16.9478V13.1848C14.3213 12.1499 15.0767 11.3032 16 11.3032C16.9233 11.3032 17.6787 12.1499 17.6787 13.1848V16.9478C17.6787 17.9827 16.9233 18.8293 16 18.8293ZM17.6787 26.3554H14.3213V22.5924H17.6787V26.3554Z" fill={props.color ? props.color : "currentColor"} />
        </svg>

    );
};

export default IconWarning;