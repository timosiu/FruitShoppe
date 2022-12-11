import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from './pages/Store';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
import Orders from './pages/Orders';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='store' element={<Store/>} />
          <Route path='orders' element={<Orders/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='*' element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
