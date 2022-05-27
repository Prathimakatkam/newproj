import { useState } from 'react';

import DisplayDetails from './Components/DisplayDetails';
import EnterUserDetails from './Components/EnterUserDetails';


function App() {

const [userdetails, setUserDetails] = useState([])
  
const displayUserHandler=(name,age)=>{
setUserDetails((prevState)=>{
return [...prevState, {uname:name, uage:age , id:Math.random()}]
})
console.log(userdetails)
}

  return (
    <div className="App">
      New Project!!!!!
      <EnterUserDetails addUserDetails={displayUserHandler} />
      <DisplayDetails users={userdetails}/>
      
    </div>
  );
}

export default App;
