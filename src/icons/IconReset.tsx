import { SVGProps } from "react";

const IconReset = (props: SVGProps<SVGSVGElement>) => {

    return (
        <svg
            width={props.width ? props.width : undefined}
            height={props.height ? props.height : "I"}
            viewBox="0 0 10 10"
            fill="none"
            {...props}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M10 0.882202V2.02076L8.04846 2.02068C9.07378 2.86552 9.70218 4.10191 9.70099 5.44907C9.69914 7.53531 8.18783 9.35363 6.033 9.8622C3.87817 10.3708 1.6308 9.43956 0.578564 7.60208C-0.473643 5.76465 -0.0616617 3.49078 1.57848 2.08339C1.8102 2.42957 2.13691 2.71078 2.52431 2.89749C2.1129 3.20957 1.78117 3.60422 1.55349 4.05246C1.32582 4.5007 1.20797 4.99113 1.20861 5.48774C1.23846 7.35417 2.85845 8.85245 4.84642 8.85224C6.66737 8.88042 8.2202 7.6195 8.45314 5.92354C8.62718 4.65643 8.02299 3.44873 6.96857 2.74938L6.96849 4.86722H5.75587V0.882202H10Z" fill={props.color ? props.color : "currentColor"} />
            <path d="M3.63682 0C2.12105 0 2.12107 2.13484 3.63684 2.13484C5.15261 2.13484 5.15259 0 3.63682 0Z" fill={props.color ? props.color : "currentColor"} />
        </svg>
    );
};

export default IconReset;