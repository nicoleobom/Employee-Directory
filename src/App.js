import React from 'react';
import Jumbotron from "./components/Jumbotron/index";
import Columns from "./components/Columns/index";
import AddBtn from './components/AddBtn/index';

function App() {
  return (
    <div>
      <Jumbotron />
      <Columns />
      <AddBtn />
    </div>
  );
}

export default App;
