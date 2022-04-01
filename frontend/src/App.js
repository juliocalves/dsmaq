import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from './pages/Home';
import { Suplyer } from "./pages/Suplyer";
import { NewSuplyer } from "./pages/NewSuplyer";
import { Login } from "./pages/Login";
import { Expenses } from "./pages/Expenses";
import { NewExpenses } from "./pages/NewExpenses";
import { Calendar } from "./pages/Calendar";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <Login/>} />
        <Route path = "/Home" element = { <Home/> } />
        <Route path = "/suplyer" element = { <Suplyer/> } />
        <Route path = "/suplyer/new" element = { <NewSuplyer/> } />
        <Route path = "/expenses" element = { <Expenses/> } />
        <Route path = "/expenses/new" element = { <NewExpenses/> } />
        <Route path = "/calendar" element = { <Calendar/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
