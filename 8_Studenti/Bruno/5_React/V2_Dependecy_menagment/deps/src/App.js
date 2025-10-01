import { v4 as uuidv4 } from "uuid";

import "./App.css";

function App() {
  const myId = uuidv4();

  return (
    <div className="App">
      <p>Moj random generirani ID: {myId}</p>
    </div>
  );
}

export default App;
