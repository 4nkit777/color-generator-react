import React, { useState } from 'react';
import Values from 'values.js';
import './App.css';
import SingleColor from './components/SingleColor';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    }catch (err) {
      setError(true);
      console.log(err);
    }
    
    
  }

  return (
    <React.Fragment>
      <div className='container d-flex justify-content-around mt-5'>
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='#b6b6b6' className={`${error ? 'error' : null} rounded shadow-sm p-2 bg-secondary text-light mr-1 `} />
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
      <div className='container d-flex flex-row flex-wrap text-center justify-content-start vh-100 mt-3'>
      {/* <div className='d-flex flex-row vh-100'> */}
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor key={index} {...color} index={index} />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default App;
