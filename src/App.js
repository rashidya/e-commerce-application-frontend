import React from "react";
import RootRouter from "./components/RootRouter/RootRouter";
import store from "./redux/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider store={store}>
        <RootRouter />
      </Provider>
      ,
    </div>
  );
}

export default App;
