import {BrowserRouter, Route, Routes} from "react-router-dom";
// import {Home} from './pages/Home';
import { Suplyer } from "./pages/Suplyer";
import { NewSuplyer } from "./pages/NewSuplyer";
import { SuplyerGroup } from "./pages/SuplyerGroup";
import { NewSuplyerGroup } from "./pages/NewSuplyerGroup";
import { Login } from "./pages/Login";
import { Expenses } from "./pages/Expenses";
import { NewExpenses } from "./pages/NewExpenses";
import {Calendar} from "./pages/Calendar";
import { User } from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' exact element = { <Login/>} />
        {/* <Route path = "/Home" element = { <Home/> } /> */}
        <Route path = "/Users" element = { <User/> } />
        <Route path = "/suplyer" element = { <Suplyer/> } />
        <Route path = "/suplyer/new" element = {<NewSuplyer/> } />
        <Route path = "/suplyergroup" element = { <SuplyerGroup/> } />
        <Route path = "/suplyergroup/new" element = {<NewSuplyerGroup/> } />
        <Route path = "/expenses" element = { <Expenses/>} />
        <Route path = "/expenses/new" element = {<NewExpenses/> } />
        <Route path = "/calendar" element = { <Calendar/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
