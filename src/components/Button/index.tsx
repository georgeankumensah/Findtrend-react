type colors = "green" | "black" | "white";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  color?: colors;
  size: number;
  bold?: boolean;
  className?: string;
};

const Button = ({
  title,
  onClick,
  color = "black",
  bold = false,
  size,
  className,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        color === "black"
          ? "bg-black text-white"
          : color === "white"
          ? "bg-white text-black"
          : "text-black bg-[#A8FF35]"
      } text-[${size}px] lg:text-[${size + 4}px] ${
        bold ? "font-[700]" : "font-[400]"
      }  flex items-center justify-center py-[12px] px-[24px] h-fit  rounded-[40px] lg:px-[32px] lg:py-[16px] ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
