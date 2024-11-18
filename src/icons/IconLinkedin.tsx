import { SVGProps } from "react";

const IconLinkedin = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={props.width ? props.width: undefined}
        height={props.height ? props.height: "32"}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g id="icon/link">
            <path
                id="Vector"
                d="M24.7024 0H7.29764C5.36219 0 3.506 0.768856 2.13743 2.13743C0.768856 3.506 0 5.36219 0 7.29764V24.7024C0 26.6378 0.768856 28.494 2.13743 29.8626C3.506 31.2311 5.36219 32 7.29764 32H24.7024C26.6378 32 28.494 31.2311 29.8626 29.8626C31.2311 28.494 32 26.6378 32 24.7024V7.29764C32 5.36219 31.2311 3.506 29.8626 2.13743C28.494 0.768856 26.6378 0 24.7024 0ZM10.8193 25.833C10.8244 25.9224 10.8113 26.0118 10.7806 26.0958C10.7499 26.1799 10.7024 26.2568 10.6409 26.3218C10.5794 26.3868 10.5053 26.4385 10.4231 26.4739C10.3409 26.5092 10.2523 26.5273 10.1629 26.5272H7.24185C7.06569 26.5229 6.89825 26.4497 6.77551 26.3232C6.65277 26.1968 6.58452 26.0273 6.58544 25.8511V13.7026C6.58302 13.6149 6.59822 13.5276 6.63012 13.4458C6.66203 13.3641 6.71 13.2896 6.77119 13.2267C6.83239 13.1638 6.90557 13.1138 6.98641 13.0797C7.06725 13.0456 7.15411 13.0281 7.24185 13.0281H10.1629C10.2506 13.0281 10.3375 13.0456 10.4183 13.0797C10.4991 13.1138 10.5723 13.1638 10.6335 13.2267C10.6947 13.2896 10.7427 13.3641 10.7746 13.4458C10.8065 13.5276 10.8217 13.6149 10.8193 13.7026V25.833ZM8.64821 10.473C8.33196 10.4707 8.01927 10.406 7.728 10.2828C7.43673 10.1596 7.17258 9.98021 6.95063 9.75491C6.72869 9.52962 6.55329 9.26281 6.43446 8.96972C6.31562 8.67664 6.25568 8.36302 6.25805 8.04677C6.26042 7.73052 6.32506 7.41783 6.44827 7.12656C6.57149 6.83529 6.75086 6.57114 6.97616 6.3492C7.20146 6.12725 7.46827 5.95185 7.76135 5.83302C8.05444 5.71419 8.36806 5.65424 8.68431 5.65662C9.31203 5.67703 9.90692 5.94195 10.342 6.39484C10.7772 6.84774 11.0181 7.45275 11.0134 8.08078C11.0087 8.70882 10.7587 9.31015 10.3168 9.75647C9.87496 10.2028 9.27616 10.4587 8.64821 10.4697M26.3992 25.8133C26.3984 25.9791 26.3333 26.1382 26.2176 26.257C26.1019 26.3757 25.9446 26.445 25.7789 26.4501H22.6954C22.5294 26.4449 22.3718 26.3755 22.2561 26.2564C22.1403 26.1372 22.0754 25.9778 22.0751 25.8117V20.1928C22.0751 19.3543 22.3311 16.5448 19.8498 16.5448C17.9151 16.5448 17.5327 18.5141 17.4589 19.3904V25.9397C17.459 26.1061 17.3942 26.2659 17.2784 26.3854C17.1626 26.5049 17.0049 26.5746 16.8386 26.5797H13.847C13.6775 26.5793 13.5152 26.5116 13.3955 26.3917C13.2758 26.2717 13.2086 26.1091 13.2086 25.9397V13.6435C13.2137 13.4772 13.2834 13.3194 13.4029 13.2036C13.5224 13.0878 13.6822 13.0231 13.8486 13.0232H16.8386C17.0049 13.0231 17.1648 13.0878 17.2843 13.2036C17.4038 13.3194 17.4734 13.4772 17.4786 13.6435V14.7019C17.9151 14.063 18.5179 13.5553 19.2218 13.2337C19.9257 12.9121 20.704 12.7888 21.4728 12.8771C26.4533 12.8771 26.4353 17.5294 26.4353 20.1748L26.3992 25.8133Z"
                fill={props.color ? props.color : "currentColor"}
            />
        </g>
    </svg>
);
export default IconLinkedin;
