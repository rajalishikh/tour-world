import { useState } from 'react';

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
  const handleList=()=>{
    console.log("My name ")
    const new_Array=[...artists,name]
    setArtists(new_Array)
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleList}>Add</button>
      <ul>
        {
          artists.map((item,idx)=><li key={idx}>{item}</li>)
        }
        
      </ul>
    </>
  );
}