import { SVGProps } from "react";

const IconMail = (props: SVGProps<SVGSVGElement>) => (
    <svg
        className={props.className}
        width={props.width ? props.width : undefined}
        height={props.height ? props.height : "32"}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g id="icon/mail">
            <path
                id="Vector"
                d="M33 17.0003C33.0001 13.6571 31.9529 10.3979 30.0056 7.68045C28.0583 4.96296 25.3087 2.9237 22.143 1.8491C18.9772 0.774487 15.5544 0.71851 12.3552 1.68903C9.15602 2.65955 6.3412 4.6078 4.30609 7.26016C2.27097 9.91252 1.11781 13.1357 1.00855 16.4771C0.899293 19.8185 1.83943 23.1101 3.69693 25.8898C5.55443 28.6694 8.23596 30.7974 11.3649 31.9748C14.4939 33.1523 17.913 33.32 21.1422 32.4545"
                stroke={props.color ? props.color : "currentColor"}
                strokeWidth={2}
                strokeLinecap="round"
            />
            <path
                id="Vector_2"
                d="M17 24.1114C20.9274 24.1114 24.1111 20.9276 24.1111 17.0003C24.1111 13.0729 20.9274 9.88916 17 9.88916C13.0726 9.88916 9.88889 13.0729 9.88889 17.0003C9.88889 20.9276 13.0726 24.1114 17 24.1114Z"
                stroke={props.color ? props.color : "currentColor"}
                strokeWidth={2}
            />
            <path
                id="Vector_3"
                d="M24.1111 11.6669V19.6669C24.1111 20.8457 24.5794 21.9761 25.4129 22.8096C26.2463 23.6431 27.3768 24.1114 28.5556 24.1114C29.7343 24.1114 30.8648 23.6431 31.6982 22.8096C32.5317 21.9761 33 20.8457 33 19.6669V17.0003"
                stroke={props.color ? props.color : "currentColor"}
                strokeWidth={2}
                strokeLinecap="round"
            />
        </g>
    </svg>
);
export default IconMail;
