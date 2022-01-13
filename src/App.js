import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [params, setParams] = useState({ pris: 0, god: 1, volym: 2, njutningsasymptot: 1 });

  const [njutningsvärde, setNjutningsvärde] = useState(1);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setParams({
      ...params, [evt.target.name]: value
    });
    setNjutningsvärde(+params.god*10/(1 + +params.pris) + +params.njutningsasymptot)
  }


  return (
    <div className="App">
      <p>Hur mycket värd är din öl?</p>
      <div className='params'>
        <div>
          pris <input type="text" name="pris" value={params.pris} onChange={handleChange} /> kr
        </div>
        <div>
          god <input type="text" name="god" value={params.god} onChange={handleChange} />
        </div>
        <div>
          volym <input type="text" name="volym" value={params.volym} onChange={handleChange} /> cl
        </div>
        <div>
          njutningsasymptot <input type="text" name="njutningsasymptot" value={params.njutningsasymptot} onChange={handleChange} />
        </div>
      </div>
      njutningsvärde: {njutningsvärde.toFixed(1)}

      <div className='table'>
        
      </div>
    </div>
    
  );
}

export default App;
