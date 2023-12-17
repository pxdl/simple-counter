import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {
  const handleMouseDown = () => {
    setCount(0);
  };

  return (
    <button onMouseDown={handleMouseDown} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
