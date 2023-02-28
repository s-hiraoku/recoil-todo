import React from "react";
import { RecoilRoot } from "recoil";
import { TodoContainer } from "./features/todos/TodoContainer";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <TodoContainer />
      </RecoilRoot>
    </div>
  );
}

export default App;
