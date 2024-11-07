type colors = "green" | "black" | "white";

type ButtonProps = {
  title: string;
  onClick: () => void;
  color?: colors;
  size: number;
};

const Button = ({ title, onClick, color = "black", size }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        color === "black"
          ? "bg-black text-white"
          : color === "white"
          ? "bg-white text-black"
          : "text-black bg-green"
      } text-${size} flex items-center justify-center w-[129px] h-[42px] rounded-[40px]`}
    >
      {title}
    </button>
  );
};

export default Button;
