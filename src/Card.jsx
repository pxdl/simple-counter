import { useEffect, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count >= 5;

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Space") {
        setCount((prev) => (prev === 5 ? prev : prev + 1));
      }
      if (e.code === "Backspace") {
        setCount((prev) => (prev === 0 || prev === 5 ? prev : prev - 1));
      }
      if (e.code === "KeyR") {
        setCount(0);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} locked={locked} />
    </div>
  );
}
