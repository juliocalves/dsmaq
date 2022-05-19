import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from './pages/Home';
import { Suplyer } from "./pages/Suplyer/Suplyer";
import { NewSuplyer } from "./pages/Suplyer/NewSuplyer";
import { NewSuplyerAddress } from "./pages/Suplyer/NewSuplyerAddress";
import { NewSuplyerContact } from "./pages/Suplyer/NewSuplyerContact";
import { SuplyerGroup } from "./pages/SuplyerGroup/SuplyerGroup";
import { NewSuplyerGroup } from "./pages/SuplyerGroup/NewSuplyerGroup";
import { Login } from "./pages/Login";
import { Expenses } from "./pages/Expense/Expenses";
import { NewExpenses } from "./pages/Expense/NewExpenses";
import {Calendar} from "./pages/Calendar/Calendar";
import { User } from "./pages/User";
import { FormPayment } from "./pages/FormPayment/FormPayment";
import { NewFormPayment } from "./pages/FormPayment/NewFormPayment";
import { Payment } from "./pages/Payment/Payment";
import { NewPayment } from "./pages/Payment/NewPayment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' exact element = { <Login/>} />
        <Route path = "/Home" element = { <Home/> } />
        <Route path = "/Users" element = { <User/> } />
        <Route path = "/suplyers" element = { <Suplyer/> } />
        <Route path = "/suplyers/new" element = {<NewSuplyer/> } />
        <Route path = "/suplyer/new/address" element = {<NewSuplyerAddress/> } />
        <Route path = "/suplyer/new/contact" element = {<NewSuplyerContact/> } />
        <Route path = "/suplyergroups" element = { <SuplyerGroup/> } />
        <Route path = "/suplyergroups/new" element = {<NewSuplyerGroup/> } />
        <Route path = '/formpayments' element = {<FormPayment/>}/>
        <Route path = '/formpayments/new' element = {<NewFormPayment/>}/>
        <Route path = '/payments' element = {<Payment/>}/>
        <Route path = '/payments/new' element = {<NewPayment/>}/>
        <Route path = "/expenses" element = { <Expenses/>} />
        <Route path = "/expenses/new" element = {<NewExpenses/> } />
        <Route path = "/calendar" element = { <Calendar/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
