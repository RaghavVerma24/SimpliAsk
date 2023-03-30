import Landing from "./components/Landing/Landing.jsx";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Appointments from "./pages/Appointments/Appointments.jsx";
import Chat from "./pages/Chat/Chat.jsx";
import Precriptions from "./pages/Prescriptions/Precriptions.jsx";
import Records from "./pages/Records/Records.jsx";

function App() {
  return (
    <div className='h-1 bg-[#191b3c]'>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/precriptions" element={<Precriptions />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/records" element={<Records />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
