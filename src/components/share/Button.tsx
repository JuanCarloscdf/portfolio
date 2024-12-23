import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {

}
const Button = ({ children, className, ...props }: Props) => {
  return (
    <button className={` flex py-1 px-2 text-white dark:text-black bg-slate-600 dark:bg-[#00ff80] rounded-2xl ${className}`} {...props}>
      <div className="flex gap-2 justify-center items-center">
        {children}
      </div>
    </button>
  );
};

export default Button;