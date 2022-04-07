import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from './pages/Home';
import { Suplyer } from "./pages/Suplyer";
import { NewSuplyer } from "./pages/NewSuplyer";
import { Login } from "./pages/Login";
import { Expenses } from "./pages/Expenses";
import { NewExpenses } from "./pages/NewExpenses";
import { Calendar } from "./pages/Calendar";
import { RequireAuth } from './context/auth/RequireAuth';
import { AuthContext } from './context/auth/AuthContext';
import { useContext } from "react";


function App() {
  const auth = useContext(AuthContext);

 

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <Login/>} />
        <Route path = "/Home" element = { <RequireAuth><Home/></RequireAuth> } />
        <Route path = "/suplyer" element = { <RequireAuth><Suplyer/></RequireAuth> } />
        <Route path = "/suplyer/new" element = {<RequireAuth><NewSuplyer/></RequireAuth> } />
        <Route path = "/expenses" element = { <RequireAuth><Expenses/></RequireAuth> } />
        <Route path = "/expenses/new" element = {<RequireAuth><NewExpenses/></RequireAuth> } />
        <Route path = "/calendar" element = { <RequireAuth><Calendar/></RequireAuth> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
