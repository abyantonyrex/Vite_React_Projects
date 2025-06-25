import './main.css';
import { Aside } from "./Components/Aside";
import { Home } from "./Components/pages/Home";
import { Routes, Route } from "react-router-dom"
import About from "./Components/pages/About";
import { Section } from './Components/pages/Section';
import { Table } from './Components/pages/Table';
import { ApiTable } from './Components/pages/ApiTable';

export const App = () => {
  return (
    <div className="flex h-screen">
      <Aside/>
      
      <main className="flex-1 p-6 overflow-auto">
        <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/section" element={<Section/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/apiTable" element={<ApiTable/>}/>
      </Routes>
      </main>
    </div>
  );
};
