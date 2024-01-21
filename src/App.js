import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp'
import Editor from './Components/Editor';
import Profile from './Components/Profile';
import Home from './Components/Home';

function App() {

  let session_data = localStorage.getItem('user')
  console.log(session_data)
  return (
 <div className="App">
      
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        
        <Route path="/editor" element={<Editor/>} />
        <Route path="/profile" element={<Profile/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
