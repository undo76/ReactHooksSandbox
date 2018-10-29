import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Stateful = React.memo(({ initial, ...props }) =>
  props.children(...useState(initial))
);

const StatefulButton = React.memo(({ initial, ...props }) => (
  <Stateful initial={initial}>
    {(value, updateValue) => (
      <button onClick={useCallback(() => updateValue(value + 1), [value])}>
        {value}
      </button>
    )}
  </Stateful>
));

const Collapsible = (
  <Stateful initial={}
)

function App() {
  const [count, updateCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>You clicked {count} times!</h2>

      <Stateful initial={true}>
        {(open, setOpen) => <div onClick={setCallback
          open?'Abierto':'Cerrado';
        }

      </Stateful>

      <StatefulButton initial={1} />
      <StatefulButton initial={10} />
      <StatefulButton initial={21} />

      <button onClick={() => updateCount(c => c - 1)}>Decrement</button>
      <button onClick={() => updateCount(c => c + 1)}>Increment</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
