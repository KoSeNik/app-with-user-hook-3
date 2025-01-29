import "./App.css";
import { useHover } from "./useHover.ts";

function App() {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref}>
      {hovered ? "На меня навели мышку" : "Наведи мышкой на меня"}
    </div>
  );
}

export default App;
