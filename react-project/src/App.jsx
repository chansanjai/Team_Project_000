
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "./component/Loginpage";
import Dashbord from "./component/Dashbord";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashbord />} />
       
      </Routes>
    </Router>
  );
}

export default App;
