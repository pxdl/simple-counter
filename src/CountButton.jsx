import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCount, type, locked }) {
  const handleMouseDown = () => {
    setCount((prev) => {
      const newCount = prev + (type === "minus" ? -1 : 1);
      return newCount >= 0 && newCount <= 5 ? newCount : prev;
    });
  };

  const handleMouseUp = (event) => {
    event.currentTarget.blur();
  };

  return (
    <div className="button-container">
      <button
        disabled={locked}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="count-btn"
      >
        {type === "minus" ? (
          <MinusIcon className="count-btn-icon" />
        ) : (
          <PlusIcon className="count-btn-icon" />
        )}
      </button>
    </div>
  );
}
