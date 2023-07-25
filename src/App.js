import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Menu from "./Pages/Menu";
import Pagenotfound from "./Pages/Pagenotfound";
function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Menu' element={<Menu/>}></Route>
        <Route path='/Pagenotfound' element={<Pagenotfound/>}></Route>

       </Routes>
       </BrowserRouter>   

      </div>
    );
}

export default App;
