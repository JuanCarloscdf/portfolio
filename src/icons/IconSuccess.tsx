import { SVGProps } from "react";

const IconSuccess = (props: SVGProps<SVGSVGElement>) => {

    return (
        <svg
            height={props.height ? props.height : "32"}
            width={props.width ? props.width : undefined}
            viewBox="0 0 32 32"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 0C7.16347 0 0 7.16347 0 16C0 24.8365 7.16347 32 16 32C24.8365 32 32 24.8365 32 16C32 7.16347 24.8365 0 16 0ZM22.0252 10.2835L24.2877 12.5461L14.4 22.4752L8.46877 16.5439L10.7312 14.2814L14.4 17.9502L22.0252 10.2835Z" fill={props.color ? props.color : "currentColor"} />
        </svg>

    );
};

export default IconSuccess;