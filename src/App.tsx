import { Dasboard } from "./pages/Dashboard"
import { SignIn } from "./pages/Signin"
 import { SignUp } from "./pages/Signup"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
   return(
      <BrowserRouter>
      <Routes>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/signin" element={<SignIn/>}/>
         <Route path="/dashboard"  element={<Dasboard/>}/>
      </Routes>
      </BrowserRouter>
   )
}

export default App
