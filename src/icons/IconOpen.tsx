import { SVGProps } from "react";

const IconOpen = (props: SVGProps<SVGSVGElement>) => {

    return (
        <svg
            width={props.width ? props.width : undefined}
            height={props.height ? props.height : "38"}
            viewBox="0 0 38 38"
            {...props}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M15 3H7C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7V31C3 32.0609 3.42143 33.0783 4.17157 33.8284C4.92172 34.5786 5.93913 35 7 35H31C32.0609 35 33.0783 34.5786 33.8284 33.8284C34.5786 33.0783 35 32.0609 35 31V23M19 19L35 3M35 3V13M35 3H25" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export default IconOpen;