import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <DataLoad></DataLoad>
    </div>
  );
}

function DataLoad() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setData(data))
  }, [])
return(
  <div>
    <h1 className='data'><span className='-data'>Data:</span> {data.length}</h1>
    <div className='user-data'>
      {
        data.map(userData => <AllData id={userData.id} name={userData.name} email={userData.email} address={userData.address.city} phone={userData.phone} website={userData.website}></AllData>)
      }
    </div>
  </div>
)

}


function AllData(props) {
  return (
    <div className='all-data'>
      <p>User id: {props.id}</p>
      <h3> <span className='name'>Name:</span> {props.name}</h3>
      <h3> <span className='name'>Email:</span> {props.email}</h3>
      <h3> <span className='name'>Address:</span> {props.address}</h3>
      <h3> <span className='name'>Phone: </span> {props.phone}</h3>
      <h3> <span className='name'>Website: </span> {props.website}</h3>
      
    </div>
  )
}

export default App;
