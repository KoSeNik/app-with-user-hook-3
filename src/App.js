import "./App.css";
import { useHover } from "./useHover.ts";

function App() {
  const { hovered, ref } = useHover();

  return (
    <div className="container">
      <div ref={ref} className={`box ${hovered ? "hovered" : ""}`}>
        {hovered ? "На меня навели мышку" : "Наведи мышкой на меня"}
      </div>
    </div>
  );
}

export default App;
