import React, {useState} from 'react';
import Header from "./Components/Header/Header";
import CovidStats from "./Components/CovidStats/CovidStats";

function App() {
  const [ value , setValue ] = useState('barChart')
  
  return (
    <div className="App">
      <Header  value={value} setValue={setValue} />
      <CovidStats value={value} setValue={setValue}/>
    </div>
  );
}

export default App;
