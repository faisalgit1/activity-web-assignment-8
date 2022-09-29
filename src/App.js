import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Activity from "./Components/Activity/Activity"
import Blog from './Components/Blog/Blog';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Activity></Activity>
      <Blog></Blog>


    </div>
  );
}

export default App;
