import React, { useState, useEffect } from "react";

const useDebounce = (val, timeout) => {
  let [state, setState] = useState(val);

  useEffect(() => {
    let timer = setTimeout(() => setState(val), timeout);
    return () => clearTimeout(timer);
  }, [val]);

  return [state];
};

const App = () => {
  const [input, setInput] = useState("");
  const [output] = useDebounce(input, 1000);

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <h1>{output}</h1>
    </div>
  );
};

export default App;
