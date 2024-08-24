import { useState } from "react";

import "./App.css";
import Counter from "./Components/Counter";

function App() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center   ">
        <Counter />
      </div>
    </>
  );
}

export default App;
