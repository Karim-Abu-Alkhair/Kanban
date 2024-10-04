import { ButtonProps } from "./Button.types";

const Button = ({
  children,
  onClick,
  type = "button",
  disabled,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 text-white px-4 py-2 rounded-md  hover:bg-blue-700 mb-4 transition-colors duration-300 ${
        disabled && "bg-gray-500 cursor-pointer"
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
