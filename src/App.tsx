import { useEffect } from "react";
import Router from "./Router";
import setScreenHeight from "./components/util/setScreenHeight";

function App() {
  useEffect(() => {
    setScreenHeight();

    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
