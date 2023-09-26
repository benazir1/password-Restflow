
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Signup from './Component/Signup'
import SignIn from "./Component/SignIn"
import Home from "./Component/Home"
import Forgotpassword from "./Component/Forgotpassword"
import NewSubmit from "./Component/NewSubmit"
function App() {
  

  return (
    <div>
    <Router>
      <Routes>
      <Route path="/signup" element={<Signup/>}> </Route>  
      <Route path="/SignIn" element={<SignIn/>}> </Route>  
      <Route path="/" element={<Home/>}> </Route>  
      <Route path="/forget-pass" element={<Forgotpassword/>}> </Route> 
      <Route path="/otp" element={<NewSubmit/>}> </Route> 
      </Routes>
       
   
    </Router>
      
    </div>
  )
}

export default App
