import { useState } from "react";
import LoginScreen from "./LoginScreen/LoginScreen";
import MainScreen from "./MainScreen/MainScreen";


function App() {
  const [user, setUser] = useState(null)
  return user?<MainScreen user={user} setUser={setUser}/>:<LoginScreen setUser={setUser}/>
    
}

export default App;
