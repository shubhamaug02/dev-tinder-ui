import Body from "./Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

function App() {

  return (
      <>
      <BrowserRouter basename="/">
       <Routes>
        <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />}></Route>
        </Route>
       </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
