import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {
  const handleMouseDown = () => {
    setCount(0);
  };

  const handleMouseUp = (event) => {
    event.currentTarget.blur();
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="reset-btn"
    >
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
