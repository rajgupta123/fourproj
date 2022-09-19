import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Profile from './Profile';
import ProfileFun from './ProfileFun';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
     
        <Home/>
  
  <Profile></Profile>
  {/* <ProfileFun></ProfileFun> */}
  <ProfileFun text="Function Profile Component"></ProfileFun>
      </header>
    </div>
  );
}

export default App;
