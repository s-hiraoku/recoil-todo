import React from "react";
import { RecoilRoot } from "recoil";
import { TodosContainer } from "./features/todos/container/TodosContainer";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <TodosContainer />
      </RecoilRoot>
    </div>
  );
}

export default App;
