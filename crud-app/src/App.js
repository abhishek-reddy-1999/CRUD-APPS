import Adduser from "./Component/Adduser";
import Navbar from "./Component/Navrbar";
import "./App.css"
import Allusers from "./Component/Allusers";
import Codeforintreview from "./Component/Codeforinterview";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Edituser from "./Component/Edituser";

 

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/add' element={<Adduser/>}/>
        <Route path='/all'  element={<Allusers/>}/>
        <Route path='/' element={<Codeforintreview/>}/>
        <Route path='/edit/:id' element={<Edituser/>}/>
        <Route path='/delete/:id' element={<Allusers/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
