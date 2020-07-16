import React from 'react';
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Columns from "./components/Columns/Columns";
// require('node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css');

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Columns />
    </div>
  );
}

export default App;
