import { SVGProps } from "react";

const IconColseThin = (props: SVGProps<SVGSVGElement> ) => {
    return (
        <svg
            height={props.height ? props.height : "32"}
            width={props.width ? props.width : undefined}
            viewBox="0 0 34 34"
            fill={props.color ? props.color : "currentColor"}
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L33 33M33 1L1 33" stroke={props.color ? props.color : "currentColor"} strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export default IconColseThin;